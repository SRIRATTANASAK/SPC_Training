import React, { useMemo, useState } from 'react';
import { getProgressStore } from '../../lib/storage';

// Standard Normal CDF using Abramowitz & Stegun approximation
export function normalCdf(z: number): number {
  const sign = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1.0 / (1.0 + 0.3275911 * x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const erf = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return 0.5 * (1.0 + sign * erf);
}

export const ZScoreCalculator: React.FC = () => {
  const [mu, setMu] = useState(20.04);
  const [sigma, setSigma] = useState(0.03);
  const [lsl, setLsl] = useState(19.90);
  const [usl, setUsl] = useState(20.10);

  const calc = useMemo(() => {
    const safeSigma = Math.max(0.001, sigma);
    const zUsl = (usl - mu) / safeSigma;
    const zLsl = (lsl - mu) / safeSigma;
    const pUpper = Math.max(0, 1 - normalCdf(zUsl));
    const pLower = Math.max(0, normalCdf(zLsl));
    const totalOos = Math.min(1, pUpper + pLower);
    const totalOosPct = totalOos * 100;
    const totalPpm = Math.round(totalOos * 1_000_000);
    return { zUsl, zLsl, pUpper, pLower, totalOosPct, totalPpm };
  }, [mu, sigma, lsl, usl]);

  const recordInteraction = () => {
    const store = getProgressStore('M2');
    const cur = store.load();
    store.save({
      var_lesson_scores: {
        ...cur.var_lesson_scores,
        L3: Math.max(cur.var_lesson_scores.L3 ?? 0, 10),
      },
    });
  };

  // Generate SVG path for normal curve from z = -4 to +4
  const svgCurve = useMemo(() => {
    const width = 520;
    const padX = 35;
    const baseY = 142;
    const plotW = width - padX * 2;
    const peakH = 110;

    const zToX = (z: number) => {
      const clamped = Math.max(-4, Math.min(4, z));
      return padX + ((clamped + 4) / 8) * plotW;
    };
    const zToY = (z: number) => {
      const pdf = Math.exp(-0.5 * z * z);
      return baseY - pdf * peakH;
    };

    const points: string[] = [];
    for (let z = -4; z <= 4; z += 0.1) {
      points.push(`${zToX(z).toFixed(1)},${zToY(z).toFixed(1)}`);
    }

    // Upper tail polygon
    const zU = Math.max(-4, Math.min(4, calc.zUsl));
    const upperPts: string[] = [`${zToX(zU).toFixed(1)},${baseY}`];
    for (let z = zU; z <= 4.001; z += 0.1) {
      upperPts.push(`${zToX(z).toFixed(1)},${zToY(z).toFixed(1)}`);
    }
    upperPts.push(`${zToX(4).toFixed(1)},${baseY}`);

    // Lower tail polygon
    const zL = Math.max(-4, Math.min(4, calc.zLsl));
    const lowerPts: string[] = [`${zToX(-4).toFixed(1)},${baseY}`];
    for (let z = -4; z <= zL; z += 0.1) {
      lowerPts.push(`${zToX(z).toFixed(1)},${zToY(z).toFixed(1)}`);
    }
    lowerPts.push(`${zToX(zL).toFixed(1)},${baseY}`);

    return {
      linePoints: points.join(' '),
      upperPoly: upperPts.join(' '),
      lowerPoly: lowerPts.join(' '),
      xUsl: zToX(zU),
      xLsl: zToX(zL),
      xMean: zToX(0),
      baseY,
    };
  }, [calc.zUsl, calc.zLsl]);

  return (
    <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
            Z-Score &amp; Tail Area Defect Calculator (INT-M2-L3-01)
          </h3>
          <p className="text-xs text-slate-600">
            คำนวณ Z-Score และพื้นที่ของเสียใต้โค้งปกติเทียบเกณฑ์ LSL / USL
          </p>
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => {
              setMu(20.04);
              setSigma(0.03);
              setLsl(19.90);
              setUsl(20.10);
              recordInteraction();
            }}
            className="rounded-md border border-sky-300 bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-900 hover:bg-sky-100 cursor-pointer"
          >
            ค่าตัวอย่างตั้งต้น (Z = +2.00)
          </button>
          <button
            type="button"
            onClick={() => {
              setMu(20.00);
              setSigma(0.022);
              setLsl(19.90);
              setUsl(20.10);
              recordInteraction();
            }}
            className="rounded-md border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-900 hover:bg-emerald-100 cursor-pointer"
          >
            จำลองกระบวนการตรงเป้า (Centered)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <label className="block space-y-1 text-xs">
          <span className="font-bold text-slate-700">Process Mean (μ):</span>
          <input
            type="number"
            step="0.01"
            value={mu}
            onChange={(e) => {
              setMu(parseFloat(e.target.value) || 0);
              recordInteraction();
            }}
            className="w-full rounded-lg border border-slate-300 px-2.5 py-1.5 font-mono font-bold text-slate-900"
          />
        </label>
        <label className="block space-y-1 text-xs">
          <span className="font-bold text-slate-700">Std Dev (σ &gt; 0):</span>
          <input
            type="number"
            step="0.005"
            min="0.001"
            value={sigma}
            onChange={(e) => {
              setSigma(Math.max(0.001, parseFloat(e.target.value) || 0.001));
              recordInteraction();
            }}
            className="w-full rounded-lg border border-slate-300 px-2.5 py-1.5 font-mono font-bold text-slate-900"
          />
        </label>
        <label className="block space-y-1 text-xs">
          <span className="font-bold text-rose-800">Lower Spec (LSL):</span>
          <input
            type="number"
            step="0.01"
            value={lsl}
            onChange={(e) => {
              setLsl(parseFloat(e.target.value) || 0);
              recordInteraction();
            }}
            className="w-full rounded-lg border border-rose-300 bg-rose-50/40 px-2.5 py-1.5 font-mono font-bold text-rose-950"
          />
        </label>
        <label className="block space-y-1 text-xs">
          <span className="font-bold text-rose-800">Upper Spec (USL):</span>
          <input
            type="number"
            step="0.01"
            value={usl}
            onChange={(e) => {
              setUsl(parseFloat(e.target.value) || 0);
              recordInteraction();
            }}
            className="w-full rounded-lg border border-rose-300 bg-rose-50/40 px-2.5 py-1.5 font-mono font-bold text-rose-950"
          />
        </label>
      </div>

      {/* Shaded Normal Bell Curve */}
      <div className="rounded-xl border border-slate-200 bg-slate-950 p-3 text-white">
        <svg viewBox="0 0 520 175" className="w-full max-w-2xl mx-auto">
          <line x1="30" y1={svgCurve.baseY} x2="490" y2={svgCurve.baseY} stroke="#475569" strokeWidth="1.5" />
          {/* Shaded Tails */}
          <polygon points={svgCurve.lowerPoly} fill="#f43f5e" opacity="0.55" />
          <polygon points={svgCurve.upperPoly} fill="#f43f5e" opacity="0.55" />
          {/* Normal Curve */}
          <polyline fill="none" stroke="#38bdf8" strokeWidth="2.5" points={svgCurve.linePoints} />
          {/* Mean line */}
          <line
            x1={svgCurve.xMean}
            y1="25"
            x2={svgCurve.xMean}
            y2={svgCurve.baseY}
            stroke="#10b981"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text x={svgCurve.xMean} y="18" textAnchor="middle" className="fill-emerald-400 text-[10px] font-bold">
            μ = {mu.toFixed(2)}
          </text>
          {/* LSL & USL lines */}
          <line
            x1={svgCurve.xLsl}
            y1="25"
            x2={svgCurve.xLsl}
            y2={svgCurve.baseY}
            stroke="#fb7185"
            strokeWidth="2"
          />
          <text x={svgCurve.xLsl} y="160" textAnchor="middle" className="fill-rose-400 text-[10px] font-bold">
            LSL ({ calc.zLsl.toFixed(2) }σ)
          </text>
          <line
            x1={svgCurve.xUsl}
            y1="25"
            x2={svgCurve.xUsl}
            y2={svgCurve.baseY}
            stroke="#fb7185"
            strokeWidth="2"
          />
          <text x={svgCurve.xUsl} y="160" textAnchor="middle" className="fill-rose-400 text-[10px] font-bold">
            USL (+{ calc.zUsl.toFixed(2) }σ)
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
          <div className="text-[11px] text-slate-500">Z_LSL &amp; Lower Tail</div>
          <div className="font-mono text-xs sm:text-sm font-extrabold text-slate-900">
            Z = {calc.zLsl.toFixed(2)} ({(calc.pLower * 100).toFixed(3)}%)
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
          <div className="text-[11px] text-slate-500">Z_USL &amp; Upper Tail</div>
          <div className="font-mono text-xs sm:text-sm font-extrabold text-slate-900">
            Z = +{calc.zUsl.toFixed(2)} ({(calc.pUpper * 100).toFixed(3)}%)
          </div>
        </div>
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-2.5">
          <div className="text-[11px] text-rose-800">Total Out-of-Spec (%)</div>
          <div className="font-mono text-sm font-extrabold text-rose-900">
            {calc.totalOosPct.toFixed(3)}%
          </div>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5">
          <div className="text-[11px] text-amber-900">Predicted Defect (PPM)</div>
          <div className="font-mono text-sm font-extrabold text-amber-950">
            {calc.totalPpm.toLocaleString()} PPM
          </div>
        </div>
      </div>
    </div>
  );
};
