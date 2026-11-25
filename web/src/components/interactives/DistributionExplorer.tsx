import React, { useMemo, useState } from 'react';
import { getProgressStore } from '../../lib/storage';

function comb(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let c = 1;
  for (let i = 1; i <= Math.min(k, n - k); i++) {
    c = (c * (n - i + 1)) / i;
  }
  return c;
}

function factorial(n: number): number {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

export const DistributionExplorer: React.FC = () => {
  const [tab, setTab] = useState<'Normal' | 'Binomial' | 'Poisson'>('Normal');
  const [visited, setVisited] = useState<Set<string>>(() => new Set(['Normal']));

  // Normal params
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1.0);

  // Binomial params
  const [binomN, setBinomN] = useState(20);
  const [binomP, setBinomP] = useState(0.05);

  // Poisson params
  const [lambda, setLambda] = useState(0.5);

  const handleTabChange = (nextTab: 'Normal' | 'Binomial' | 'Poisson') => {
    setTab(nextTab);
    const nextVisited = new Set(visited);
    nextVisited.add(nextTab);
    setVisited(nextVisited);
    if (nextVisited.size >= 3) {
      const store = getProgressStore('M2');
      const cur = store.load();
      store.save({
        var_lesson_scores: {
          ...cur.var_lesson_scores,
          L3: Math.max(cur.var_lesson_scores.L3 ?? 0, 10),
        },
      });
    }
  };

  const binomBars = useMemo(() => {
    const maxK = Math.min(binomN, 15);
    const bars: Array<{ k: number; p: number }> = [];
    for (let k = 0; k <= maxK; k++) {
      const prob = comb(binomN, k) * Math.pow(binomP, k) * Math.pow(1 - binomP, binomN - k);
      bars.push({ k, p: prob });
    }
    return bars;
  }, [binomN, binomP]);

  const poissonBars = useMemo(() => {
    const bars: Array<{ k: number; p: number }> = [];
    for (let k = 0; k <= 12; k++) {
      const prob = (Math.exp(-lambda) * Math.pow(lambda, k)) / factorial(k);
      bars.push({ k, p: prob });
    }
    return bars;
  }, [lambda]);

  const normalPoints = useMemo(() => {
    const pts: string[] = [];
    for (let x = -8; x <= 8; x += 0.2) {
      const z = (x - mu) / sigma;
      const pdf = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
      const sx = 40 + ((x + 8) / 16) * 440;
      const sy = 155 - Math.min(130, pdf * 240);
      pts.push(`${sx.toFixed(1)},${sy.toFixed(1)}`);
    }
    return pts.join(' ');
  }, [mu, sigma]);

  return (
    <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
            Interactive Distribution Explorer (INT-M2-L3-02)
          </h3>
          <p className="text-xs text-slate-600">
            สลับสำรวจการแจกแจงทั้ง 3 แบบหลัก (Normal, Binomial, Poisson) และปรับพารามิเตอร์แบบ Real-time
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          {(['Normal', 'Binomial', 'Poisson'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => handleTabChange(t)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                tab === t
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {tab === 'Normal' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-5 space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>Mean (μ — ตำแหน่งศูนย์กลาง):</span>
                <span className="font-mono text-sky-800">{mu.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={mu}
                onChange={(e) => setMu(parseFloat(e.target.value))}
                className="w-full accent-sky-600"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>Std Dev (σ — ความกว้างกราฟ):</span>
                <span className="font-mono text-sky-800">{sigma.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="3.0"
                step="0.2"
                value={sigma}
                onChange={(e) => setSigma(parseFloat(e.target.value))}
                className="w-full accent-sky-600"
              />
            </div>
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs space-y-1 text-slate-800">
              <div className="font-bold text-sky-950">คุณสมบัติ Normal Distribution:</div>
              <div>• ช่วง ±1σ = [{(mu - sigma).toFixed(2)}, {(mu + sigma).toFixed(2)}] (68.27%)</div>
              <div>• ช่วง ±2σ = [{(mu - 2 * sigma).toFixed(2)}, {(mu + 2 * sigma).toFixed(2)}] (95.45%)</div>
              <div>• ช่วง ±3σ = [{(mu - 3 * sigma).toFixed(2)}, {(mu + 3 * sigma).toFixed(2)}] (99.73%)</div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl bg-slate-950 p-3 text-white">
            <svg viewBox="0 0 520 180" className="w-full">
              <line x1="40" y1="155" x2="480" y2="155" stroke="#475569" strokeWidth="1.5" />
              <line x1="260" y1="20" x2="260" y2="155" stroke="#334155" strokeDasharray="3 3" />
              <polyline fill="none" stroke="#38bdf8" strokeWidth="3" points={normalPoints} />
              <text x="260" y="172" textAnchor="middle" className="fill-slate-300 text-[11px]">
                แกน X (-8 ถึง +8) | μ = {mu.toFixed(1)}, σ = {sigma.toFixed(1)}
              </text>
            </svg>
          </div>
        </div>
      )}

      {tab === 'Binomial' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-5 space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>Sample Size (n ชิ้น):</span>
                <span className="font-mono text-sky-800">{binomN}</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={binomN}
                onChange={(e) => setBinomN(parseInt(e.target.value, 10))}
                className="w-full accent-sky-600"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>Defective Proportion (p):</span>
                <span className="font-mono text-sky-800">{(binomP * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.50"
                step="0.01"
                value={binomP}
                onChange={(e) => setBinomP(parseFloat(e.target.value))}
                className="w-full accent-sky-600"
              />
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs space-y-1 text-slate-800">
              <div>
                <strong>Mean (μ = np):</strong> {(binomN * binomP).toFixed(2)} ชิ้น |{' '}
                <strong>SD:</strong> {Math.sqrt(binomN * binomP * (1 - binomP)).toFixed(3)}
              </div>
              <div>
                <strong>โอกาสไม่เจอของเสียเลย P(X = 0):</strong>{' '}
                <span className="font-mono font-bold text-amber-900">
                  {(Math.pow(1 - binomP, binomN) * 100).toFixed(2)}%
                </span>
              </div>
              {binomN * binomP >= 5 && binomN * (1 - binomP) >= 5 ? (
                <div className="mt-1 inline-block rounded bg-emerald-100 px-2 py-0.5 font-bold text-emerald-900 border border-emerald-300">
                  ✓ np ≥ 5 และ n(1−p) ≥ 5: เข้าใกล้ Normal Approximation
                </div>
              ) : (
                <div className="mt-1 inline-block rounded bg-slate-200 px-2 py-0.5 font-semibold text-slate-700">
                  np &lt; 5: กราฟยังเบ้ขวา (Discrete Binomial)
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl bg-slate-950 p-3 text-white">
            <svg viewBox="0 0 520 180" className="w-full">
              <line x1="35" y1="150" x2="495" y2="150" stroke="#475569" strokeWidth="1.5" />
              {binomBars.map((b, i) => {
                const bw = Math.min(24, 420 / binomBars.length - 4);
                const x = 45 + i * (430 / binomBars.length);
                const h = Math.min(120, b.p * 220);
                return (
                  <g key={b.k}>
                    <rect
                      x={x}
                      y={150 - h}
                      width={bw}
                      height={h}
                      fill={b.k === 0 ? '#f59e0b' : '#38bdf8'}
                      rx="2"
                    />
                    <text x={x + bw / 2} y="164" textAnchor="middle" className="fill-slate-300 text-[9px]">
                      {b.k}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      )}

      {tab === 'Poisson' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-5 space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>Average Defects per Unit (λ):</span>
                <span className="font-mono text-sky-800">{lambda.toFixed(1)} จุด/หน่วย</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="10.0"
                step="0.2"
                value={lambda}
                onChange={(e) => setLambda(parseFloat(e.target.value))}
                className="w-full accent-sky-600"
              />
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs space-y-1 text-slate-800">
              <div>
                <strong>Mean (μ = λ):</strong> {lambda.toFixed(2)} |{' '}
                <strong>SD (σ = √λ):</strong> {Math.sqrt(lambda).toFixed(3)}
              </div>
              <div>
                <strong>โอกาสไร้ตำหนิ P(X = 0) = e⁻ᵞ:</strong>{' '}
                <span className="font-mono font-bold text-emerald-900">
                  {(Math.exp(-lambda) * 100).toFixed(2)}%
                </span>
              </div>
              <div>
                <strong>โอกาสพบ ≥ 2 จุด P(X ≥ 2):</strong>{' '}
                <span className="font-mono font-bold text-rose-800">
                  {((1 - Math.exp(-lambda) * (1 + lambda)) * 100).toFixed(2)}%
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl bg-slate-950 p-3 text-white">
            <svg viewBox="0 0 520 180" className="w-full">
              <line x1="35" y1="150" x2="495" y2="150" stroke="#475569" strokeWidth="1.5" />
              {poissonBars.map((b, i) => {
                const bw = 22;
                const x = 45 + i * 33;
                const h = Math.min(120, b.p * 190);
                return (
                  <g key={b.k}>
                    <rect
                      x={x}
                      y={150 - h}
                      width={bw}
                      height={h}
                      fill={b.k === 0 ? '#10b981' : '#38bdf8'}
                      rx="2"
                    />
                    <text x={x + bw / 2} y="164" textAnchor="middle" className="fill-slate-300 text-[9px]">
                      {b.k}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
