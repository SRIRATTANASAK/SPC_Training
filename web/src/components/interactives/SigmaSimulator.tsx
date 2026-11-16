import React, { useMemo, useState } from 'react';

function erf(x: number): number {
  const sign = x >= 0 ? 1 : -1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y =
    1 -
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) *
      Math.exp(-ax * ax);
  return sign * y;
}

export const SigmaSimulator: React.FC = () => {
  const [sigma, setSigma] = useState(0.5);

  const metrics = useMemo(() => {
    const z = 3.0 / sigma;
    const inSpec = erf(z / Math.SQRT2);
    const outOfSpecPct = Math.max(0, (1 - inSpec) * 100);
    const pts: string[] = [];
    for (let i = 0; i <= 80; i++) {
      const x = -4.5 + (i / 80) * 9.0;
      const pdf = Math.exp(-0.5 * (x / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));
      const px = 20 + (i / 80) * 440;
      const py = 145 - Math.min(pdf * 110, 125);
      pts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
    }
    return { outOfSpecPct, pathD: pts.join(' ') };
  }, [sigma]);

  let status = { cls: 'bg-emerald-50 border-emerald-300 text-emerald-900', text: '✓ Low Variation — Safe Margin' };
  if (sigma > 0.8 && sigma <= 1.2) {
    status = { cls: 'bg-amber-50 border-amber-300 text-amber-900', text: '⚠ Variation Approaching Spec Limits' };
  } else if (sigma > 1.2) {
    status = { cls: 'bg-rose-50 border-rose-300 text-rose-900', text: '✕ High Variation — Producing Defects!' };
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">INT-M1-L3-02</span>
          <h3 className="text-lg font-bold text-slate-900">Sigma Variation Simulator (Spec Fixed at Target ± 3.0)</h3>
        </div>
        <span className="font-mono text-sm font-bold text-sky-800">σ = {sigma.toFixed(1)}</span>
      </div>

      <input
        type="range"
        min={0.1}
        max={3.0}
        step={0.1}
        value={sigma}
        onChange={(e) => setSigma(Number(e.target.value))}
        className="w-full accent-sky-700 mb-3"
      />

      <svg viewBox="0 0 480 170" className="w-full rounded-lg border border-slate-200 bg-slate-50 mb-3">
        <line x1="20" y1="145" x2="460" y2="145" stroke="#94a3b8" strokeWidth="1.5" />
        {/* LSL (-3.0) and USL (+3.0) */}
        <line x1="93" y1="15" x2="93" y2="145" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 3" />
        <line x1="240" y1="15" x2="240" y2="145" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="387" y1="15" x2="387" y2="145" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 3" />
        <text x="93" y="160" textAnchor="middle" className="fill-rose-700 text-[10px] font-bold">LSL (-3.0)</text>
        <text x="240" y="160" textAnchor="middle" className="fill-sky-700 text-[10px] font-bold">Target (0)</text>
        <text x="387" y="160" textAnchor="middle" className="fill-rose-700 text-[10px] font-bold">USL (+3.0)</text>
        <path d={metrics.pathD} fill="none" stroke="#1e40af" strokeWidth="3" />
      </svg>

      <div className={`flex flex-wrap items-center justify-between gap-2 rounded-lg border-2 p-3 text-sm font-bold ${status.cls}`}>
        <span>{status.text}</span>
        <span>% Out of Spec: {metrics.outOfSpecPct.toFixed(2)}%</span>
      </div>
    </div>
  );
};
