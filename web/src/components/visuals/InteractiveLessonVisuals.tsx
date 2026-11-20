import React, { useState } from 'react';
import { InlineMarkdown } from '../MarkdownContent';

// -------------------------------------------------------------
// Sample data from workshop_m1_dimensions_and_defects.csv
// -------------------------------------------------------------
const WORKSHOP_SAMPLES = [
  { id: 1, time: '08:00', mc: 'MC-A', cavity: 1, temp: 175.2, diam: 50.00, defect: 'None' },
  { id: 2, time: '08:30', mc: 'MC-A', cavity: 2, temp: 175.4, diam: 50.01, defect: 'None' },
  { id: 3, time: '09:00', mc: 'MC-A', cavity: 3, temp: 174.9, diam: 49.99, defect: 'None' },
  { id: 4, time: '09:30', mc: 'MC-A', cavity: 4, temp: 175.5, diam: 50.02, defect: 'None' },
  { id: 5, time: '10:00', mc: 'MC-A', cavity: 1, temp: 175.1, diam: 50.00, defect: 'None' },
  { id: 6, time: '10:30', mc: 'MC-A', cavity: 2, temp: 175.3, diam: 50.01, defect: 'Scratch' },
  { id: 7, time: '11:00', mc: 'MC-A', cavity: 3, temp: 174.8, diam: 49.98, defect: 'None' },
  { id: 8, time: '11:30', mc: 'MC-A', cavity: 4, temp: 175.6, diam: 50.02, defect: 'Scratch' },
  { id: 9, time: '12:00', mc: 'MC-A', cavity: 1, temp: 175.0, diam: 50.00, defect: 'None' },
  { id: 10, time: '12:30', mc: 'MC-A', cavity: 2, temp: 175.2, diam: 50.01, defect: 'Burr' },
  { id: 11, time: '13:00', mc: 'MC-B', cavity: 1, temp: 176.1, diam: 50.03, defect: 'None' },
  { id: 12, time: '13:30', mc: 'MC-B', cavity: 2, temp: 176.5, diam: 50.04, defect: 'Scratch' },
  { id: 13, time: '14:00', mc: 'MC-B', cavity: 3, temp: 177.0, diam: 50.06, defect: 'Burr' },
  { id: 14, time: '14:30', mc: 'MC-B', cavity: 4, temp: 177.4, diam: 50.07, defect: 'Scratch' },
  { id: 15, time: '15:00', mc: 'MC-B', cavity: 1, temp: 178.2, diam: 50.09, defect: 'Dent' },
  { id: 16, time: '15:30', mc: 'MC-B', cavity: 2, temp: 178.8, diam: 50.11, defect: 'Scratch' },
  { id: 17, time: '16:00', mc: 'MC-B', cavity: 3, temp: 179.5, diam: 50.14, defect: 'Crack' }, // Outlier!
  { id: 18, time: '16:30', mc: 'MC-B', cavity: 4, temp: 178.1, diam: 50.08, defect: 'Scratch' },
];

// =============================================================
// 1. M1L3-S03: Mode & Bimodal Explorer Card
// =============================================================
export const ModeVisualCard: React.FC = () => {
  const [bimodal, setBimodal] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start w-full">
      {/* Left Column: Theory & Calculation */}
      <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-600 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-sky-900">
            หลักการและวิธีหาค่าฐานนิยม (Mode)
          </span>
        </div>

        <div className="rounded-xl border border-sky-200 bg-white p-3 shadow-2xs space-y-2">
          <div className="text-xs text-slate-700">
            <strong>นิยาม:</strong> ค่าที่มีความถี่เกิดขึ้นซ้ำบ่อยที่สุดในชุดข้อมูล
          </div>
          <div className="rounded-lg bg-slate-50 p-2.5 border border-sky-200/70 text-center text-xs font-mono">
            <span>49.99, </span>
            <span className="bg-sky-100 text-sky-950 font-bold px-1.5 py-0.5 rounded border border-sky-300">
              50.00
            </span>
            <span>, </span>
            <span className="bg-sky-100 text-sky-950 font-bold px-1.5 py-0.5 rounded border border-sky-300">
              50.00
            </span>
            <span>, 50.01, 50.02</span>
            <div className="mt-1 font-sans font-bold text-sky-900 text-sm">
              → Mode = 50.00 mm (ซ้ำ 2 ครั้ง)
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs space-y-1.5 text-xs text-slate-700">
          <div className="font-bold text-slate-900">จุดเด่นที่สำคัญในงานวิศวกรรม:</div>
          <p>• ใช้ได้กับข้อมูลทุกระดับรวมถึง <strong>Nominal Data</strong> (เช่น Defect ชนิดไหนพบบ่อยสุด)</p>
          <p>• เป็นตัวตรวจจับความผิดปกติแบบ <strong>Bimodal (2 ยอด)</strong> ที่ Mean และ Median มองไม่เห็น</p>
        </div>
      </div>

      {/* Right Column: Interactive Bimodal Detector */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
            แบบจำลองตรวจจับ Bimodal (2 ยอด)
          </span>
          <button
            type="button"
            onClick={() => setBimodal((v) => !v)}
            className={`rounded-lg px-2.5 py-1 text-xs font-bold transition shadow-2xs ${
              bimodal ? 'bg-amber-600 text-white' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {bimodal ? 'สลับ: 1 เครื่องจักร (ปกติ)' : 'สลับ: 2 เครื่องจักรปนกัน (Bimodal)'}
          </button>
        </div>

        {/* Visual Frequency Bars */}
        <div className="rounded-xl border border-amber-200 bg-white p-4 shadow-2xs">
          <div className="text-xs font-semibold text-slate-600 mb-2 text-center">
            {bimodal ? '⚠️ ตรวจพบข้อมูล 2 ยอด (Peak ที่ 50.00 mm และ 50.08 mm)' : '✓ ข้อมูลกระจายยอดเดี่ยวสม่ำเสมอ (Peak ที่ 50.00 mm)'}
          </div>
          <div className="h-32 flex items-end justify-center gap-3 pt-4 border-b border-slate-300">
            {/* Bar 1 */}
            <div className="flex flex-col items-center gap-1 w-12">
              <span className="text-[10px] font-bold text-slate-500">{bimodal ? '3' : '2'}</span>
              <div
                className="w-full bg-sky-500 rounded-t transition-all duration-500"
                style={{ height: bimodal ? '45px' : '30px' }}
              />
              <span className="text-[10px] font-mono text-slate-600">49.99</span>
            </div>
            {/* Bar 2: Peak 1 */}
            <div className="flex flex-col items-center gap-1 w-12">
              <span className="text-[10px] font-bold text-sky-700">{bimodal ? '7' : '10'}</span>
              <div
                className="w-full bg-sky-600 rounded-t transition-all duration-500 ring-2 ring-sky-300"
                style={{ height: bimodal ? '85px' : '105px' }}
              />
              <span className="text-[10px] font-mono font-bold text-sky-900">50.00*</span>
            </div>
            {/* Bar 3 */}
            <div className="flex flex-col items-center gap-1 w-12">
              <span className="text-[10px] font-bold text-slate-500">{bimodal ? '2' : '4'}</span>
              <div
                className="w-full bg-sky-500 rounded-t transition-all duration-500"
                style={{ height: bimodal ? '30px' : '55px' }}
              />
              <span className="text-[10px] font-mono text-slate-600">50.02</span>
            </div>
            {/* Bar 4: Peak 2 (when bimodal) */}
            <div className="flex flex-col items-center gap-1 w-12">
              <span className="text-[10px] font-bold text-amber-700">{bimodal ? '8' : '1'}</span>
              <div
                className={`w-full rounded-t transition-all duration-500 ${
                  bimodal ? 'bg-amber-600 ring-2 ring-amber-300' : 'bg-slate-300'
                }`}
                style={{ height: bimodal ? '95px' : '15px' }}
              />
              <span className="text-[10px] font-mono font-bold text-amber-900">50.08{bimodal ? '*' : ''}</span>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-lg bg-amber-50 text-xs text-amber-950 border border-amber-200 leading-relaxed">
            <strong>คำเตือนโรงงาน:</strong> {bimodal
              ? 'เมื่อกราฟมี 2 ยอด (Bimodal) ห้ามหาค่าเฉลี่ยเด็ดขาด! ให้สงสัยทันทีว่ามี 2 เครื่องจักร, 2 กะการทำงาน หรือ 2 หลุมแม่พิมพ์ปนกันอยู่ในล็อตเดียวกัน'
              : 'กระบวนการยอดเดี่ยว (Unimodal) บ่งบอกว่าข้อมูลมาจากแหล่งผลิตแหล่งเดียวที่มีความสม่ำเสมอ'}
          </div>
        </div>
      </div>
    </div>
  );
};

// =============================================================
// 2. M1L3-S04: Unified Measures of Dispersion (Range + Var + SD)
// =============================================================
export const DispersionUnifiedCard: React.FC = () => {
  const [outlier, setOutlier] = useState(false);
  const [activeSigma, setActiveSigma] = useState<1 | 2 | 3>(3);

  // Dataset calculation: normal vs outlier
  const data = outlier ? [49.99, 50.00, 50.00, 50.01, 50.50] : [49.99, 50.00, 50.00, 50.01, 50.02];
  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const range = Math.max(...data) - Math.min(...data);
  const variance = data.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / (data.length - 1);
  const sd = Math.sqrt(variance);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start w-full">
      {/* Left 6 cols: 3 Dispersion Formulas & Calculations */}
      <div className="lg:col-span-6 space-y-3">
        {/* Card 1: Range */}
        <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-950 uppercase">1. พิสัย (Range: R)</span>
            <span className="rounded bg-sky-200/80 px-2 py-0.5 text-[11px] font-mono font-bold text-sky-900">
              R = Max − Min
            </span>
          </div>
          <div className="mt-2 text-xs text-slate-800 flex items-center justify-between">
            <span>คำนวณ: {Math.max(...data).toFixed(2)} − {Math.min(...data).toFixed(2)}</span>
            <span className="font-mono font-bold text-sm text-sky-950">R = {range.toFixed(3)} mm</span>
          </div>
          <div className="text-[11px] text-slate-600 mt-1">
            ⚡ คำนวณเร็วมาก เหมาะกับกลุ่มย่อยเล็กหน้างาน (<InlineMarkdown text="$n \le 10$" /> ใน <InlineMarkdown text="$\bar{X}\text{-}R$" /> Chart)
          </div>
        </div>

        {/* Card 2: Variance */}
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-950 uppercase">2. ความแปรปรวน (Variance: s²)</span>
            <span className="rounded bg-indigo-200/80 px-2 py-0.5 text-[11px] font-mono font-bold text-indigo-900">
              s² = Σ(x − x̄)² / (n − 1)
            </span>
          </div>
          <div className="mt-2 text-xs text-slate-800 flex items-center justify-between">
            <span>ผลรวมกำลังสองหารด้วย n−1:</span>
            <span className="font-mono font-bold text-sm text-indigo-950">s² = {variance.toFixed(6)} mm²</span>
          </div>
          <div className="text-[11px] text-slate-600 mt-1">
            📐 นำข้อมูลทุกจุดมาคิด แต่หน่วยเป็นกำลังสอง (<InlineMarkdown text="$\text{mm}^2$" />) ทำให้อ่านเทียบสเปกจริงยาก
          </div>
        </div>

        {/* Card 3: Standard Deviation */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-950 uppercase">3. ส่วนเบี่ยงเบนมาตรฐาน (SD: s / σ)</span>
            <span className="rounded bg-emerald-200/80 px-2 py-0.5 text-[11px] font-mono font-bold text-emerald-900">
              s = √s²
            </span>
          </div>
          <div className="mt-2 text-xs text-slate-800 flex items-center justify-between">
            <span>ถอดรากที่สองกลับสู่หน่วยจริง:</span>
            <span className="font-mono font-bold text-sm text-emerald-950">s = {sd.toFixed(4)} mm</span>
          </div>
          <div className="text-[11px] text-emerald-800 font-semibold mt-1">
            🎯 หน่วยเดียวกับชิ้นงานจริง เป็นรากฐานของเส้น Control Limit ใน SPC!
          </div>
        </div>
      </div>

      {/* Right 6 cols: Empirical Rule (68-95-99.7) & Outlier Test */}
      <div className="lg:col-span-6 rounded-2xl border border-slate-300 bg-white p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
            กฎการกระจายตัวปกติ (Empirical Rule)
          </span>
          <button
            type="button"
            onClick={() => setOutlier((v) => !v)}
            className={`rounded-lg px-2.5 py-1 text-xs font-bold transition shadow-2xs ${
              outlier ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            {outlier ? 'คืนค่าปกติ (ไร้ Outlier)' : 'ทดสอบใส่ Outlier 50.50 mm'}
          </button>
        </div>

        {/* Sigma Range Tabs */}
        <div className="flex gap-1.5 p-1 rounded-lg bg-slate-100 text-xs">
          <button
            type="button"
            onClick={() => setActiveSigma(1)}
            className={`flex-1 py-1 text-center font-bold rounded ${
              activeSigma === 1 ? 'bg-white text-sky-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ±1σ (~68.27%)
          </button>
          <button
            type="button"
            onClick={() => setActiveSigma(2)}
            className={`flex-1 py-1 text-center font-bold rounded ${
              activeSigma === 2 ? 'bg-white text-indigo-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ±2σ (~95.45%)
          </button>
          <button
            type="button"
            onClick={() => setActiveSigma(3)}
            className={`flex-1 py-1 text-center font-bold rounded ${
              activeSigma === 3 ? 'bg-white text-emerald-900 shadow-2xs ring-1 ring-emerald-400' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ±3σ (~99.73%) ★
          </button>
        </div>

        {/* SVG Normal Distribution Curve */}
        <div className="relative rounded-xl border border-slate-200 bg-slate-950 p-3 overflow-hidden">
          <svg viewBox="0 0 320 140" className="w-full h-28">
            {/* Shaded Areas */}
            <path
              d="M 20 120 C 60 120 110 30 160 30 C 210 30 260 120 300 120 Z"
              fill={activeSigma === 3 ? '#059669' : '#1e293b'}
              opacity={activeSigma === 3 ? '0.4' : '0.2'}
            />
            {activeSigma >= 2 && (
              <path
                d="M 60 120 C 90 120 120 30 160 30 C 200 30 230 120 260 120 Z"
                fill="#4f46e5"
                opacity="0.5"
              />
            )}
            {activeSigma >= 1 && (
              <path
                d="M 110 120 C 130 120 140 30 160 30 C 180 30 190 120 210 120 Z"
                fill="#0284c7"
                opacity="0.65"
              />
            )}
            {/* Outline curve */}
            <path
              d="M 20 120 C 60 120 110 30 160 30 C 210 30 260 120 300 120"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            {/* Mean Center line */}
            <line x1="160" y1="20" x2="160" y2="125" stroke="#f8fafc" strokeWidth="2" strokeDasharray="3 3" />
            <text x="160" y="16" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">
              Mean ({mean.toFixed(3)})
            </text>
            {/* Bottom labels */}
            <text x="110" y="135" textAnchor="middle" fill="#94a3b8" fontSize="9">−1σ</text>
            <text x="60" y="135" textAnchor="middle" fill="#94a3b8" fontSize="9">−2σ</text>
            <text x="20" y="135" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">−3σ (LCL)</text>
            <text x="210" y="135" textAnchor="middle" fill="#94a3b8" fontSize="9">+1σ</text>
            <text x="260" y="135" textAnchor="middle" fill="#94a3b8" fontSize="9">+2σ</text>
            <text x="300" y="135" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">+3σ (UCL)</text>
          </svg>
        </div>

        <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 leading-relaxed">
          {activeSigma === 1 && (
            <span><strong>ช่วง ±1σ:</strong> ครอบคลุมชิ้นงานประมาณ <strong>68.27%</strong> เกาะกลุ่มแน่นรอบค่าเฉลี่ย</span>
          )}
          {activeSigma === 2 && (
            <span><strong>ช่วง ±2σ:</strong> ครอบคลุมชิ้นงานประมาณ <strong>95.45%</strong> เป็นขอบเขตเฝ้าระวัง (Warning Limit)</span>
          )}
          {activeSigma === 3 && (
            <span>
              <strong>ช่วง ±3σ (หัวใจของ SPC):</strong> ครอบคลุมชิ้นงานถึง <strong>99.73%</strong> ในกระบวนการปกติ โอกาสที่ชิ้นงานหลุดออกนอก ±3σ ตามธรรมชาติมีเพียง <strong>0.27%</strong> (3 ใน 1,000 ชิ้น) เท่านั้น!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// =============================================================
// 3. M1L4-S01: Real Data Preview (Shaft 30 Samples Table)
// =============================================================
export const Workshop2DataPreview: React.FC = () => {
  return (
    <div className="w-full space-y-3">
      <div className="rounded-xl border border-slate-300 bg-white shadow-sm overflow-hidden">
        <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm font-bold">
          <span>ตัวอย่างชุดข้อมูลจริง Workshop 2: ขนาดและ Defect ของเพลา (30 ตัวอย่าง)</span>
          <span className="text-sky-300 font-mono text-xs">Spec: 50.00 ± 0.05 mm</span>
        </div>
        <div className="max-h-64 overflow-y-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 text-slate-800 sticky top-0 border-b border-slate-300 font-bold">
              <tr>
                <th className="px-3 py-2 border-r border-slate-200 text-center">#</th>
                <th className="px-3 py-2 border-r border-slate-200">เวลา</th>
                <th className="px-3 py-2 border-r border-slate-200">เครื่องจักร</th>
                <th className="px-3 py-2 border-r border-slate-200 text-center">Cavity</th>
                <th className="px-3 py-2 border-r border-slate-200 text-right">อุณหภูมิ (°C)</th>
                <th className="px-3 py-2 border-r border-slate-200 text-right">ขนาด (mm)</th>
                <th className="px-3 py-2">ของเสียที่พบ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono text-[11px]">
              {WORKSHOP_SAMPLES.map((row) => (
                <tr key={row.id} className={row.diam > 50.05 ? 'bg-rose-50 text-rose-900 font-bold' : 'hover:bg-slate-50'}>
                  <td className="px-3 py-1.5 border-r border-slate-200 text-center text-slate-500">{row.id}</td>
                  <td className="px-3 py-1.5 border-r border-slate-200 text-slate-700">{row.time}</td>
                  <td className="px-3 py-1.5 border-r border-slate-200 font-sans font-bold">
                    <span className={row.mc === 'MC-A' ? 'text-sky-700' : 'text-amber-700'}>{row.mc}</span>
                  </td>
                  <td className="px-3 py-1.5 border-r border-slate-200 text-center text-slate-700">{row.cavity}</td>
                  <td className="px-3 py-1.5 border-r border-slate-200 text-right text-slate-700">{row.temp.toFixed(1)}</td>
                  <td className="px-3 py-1.5 border-r border-slate-200 text-right font-bold">
                    {row.diam.toFixed(2)}
                    {row.diam > 50.05 && <span className="ml-1 text-[10px] text-rose-600 font-sans">(Out!)</span>}
                  </td>
                  <td className="px-3 py-1.5 font-sans">
                    {row.defect === 'None' ? (
                      <span className="text-slate-400">ปกติ</span>
                    ) : (
                      <span className="rounded bg-rose-100 text-rose-800 px-1.5 py-0.5 text-[10px] font-bold">
                        {row.defect}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// =============================================================
// 4. M1L4-S02: Interactive Histogram Chart
// =============================================================
export const HistogramChart: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mc-a' | 'mc-b'>('all');

  const bins = [
    { range: '49.98–49.99', countAll: 4, countA: 3, countB: 1 },
    { range: '50.00–50.01', countAll: 11, countA: 8, countB: 3 },
    { range: '50.02–50.03', countAll: 6, countA: 4, countB: 2 },
    { range: '50.04–50.05', countAll: 3, countA: 0, countB: 3 },
    { range: '50.06–50.07', countAll: 3, countA: 0, countB: 3 },
    { range: '50.08–50.09', countAll: 2, countA: 0, countB: 2 },
    { range: '50.10+', countAll: 1, countA: 0, countB: 1 }, // Outlier bin
  ];

  const maxCount = 12;

  return (
    <div className="rounded-xl border border-sky-300 bg-white p-4 shadow-sm space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Histogram (ฮิสโตแกรม)</span>
          <h4 className="text-sm font-bold text-slate-900">ดูรูปร่างและการกระจายตัวของขนาดเพลาเทียบกับ Spec</h4>
        </div>
        <div className="flex gap-1 rounded-lg bg-slate-100 p-1 text-xs">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-2 py-0.5 rounded font-bold transition ${
              filter === 'all' ? 'bg-sky-700 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            รวม (30 ชิ้น)
          </button>
          <button
            type="button"
            onClick={() => setFilter('mc-a')}
            className={`px-2 py-0.5 rounded font-bold transition ${
              filter === 'mc-a' ? 'bg-sky-700 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            MC-A (กะเช้า)
          </button>
          <button
            type="button"
            onClick={() => setFilter('mc-b')}
            className={`px-2 py-0.5 rounded font-bold transition ${
              filter === 'mc-b' ? 'bg-sky-700 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            MC-B (กะบ่าย)
          </button>
        </div>
      </div>

      {/* SVG Bars */}
      <div className="h-44 w-full flex items-end justify-between gap-1.5 pt-6 pb-2 border-b border-slate-300">
        {bins.map((b) => {
          const val = filter === 'all' ? b.countAll : filter === 'mc-a' ? b.countA : b.countB;
          const hPct = (val / maxCount) * 100;
          const isOut = b.range.includes('50.06') || b.range.includes('50.08') || b.range.includes('50.10');
          return (
            <div key={b.range} className="flex-1 flex flex-col items-center gap-1 group relative">
              <span className="text-[10px] font-bold text-slate-600">{val > 0 ? val : ''}</span>
              <div
                className={`w-full rounded-t transition-all duration-300 ${
                  isOut ? 'bg-rose-500 group-hover:bg-rose-600' : 'bg-sky-600 group-hover:bg-sky-700'
                }`}
                style={{ height: `${Math.max(hPct, 4)}%` }}
              />
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-600 text-center whitespace-nowrap">
                {b.range}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>LSL = 49.95 mm</span>
        <span className="font-bold text-slate-900">Target = 50.00 mm</span>
        <span className="text-rose-600 font-bold">USL = 50.05 mm</span>
      </div>
    </div>
  );
};

// =============================================================
// 5. M1L4-S03: Interactive Box Plot Chart
// =============================================================
export const BoxPlotChart: React.FC = () => {
  return (
    <div className="rounded-xl border border-indigo-300 bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Box Plot (แผนภาพกล่อง)</span>
          <h4 className="text-sm font-bold text-slate-900">เปรียบเทียบ MC-A vs MC-B และตรวจจับ Outlier</h4>
        </div>
        <span className="rounded bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-900 border border-indigo-200">
          5-Point Summary
        </span>
      </div>

      <svg viewBox="0 0 420 180" className="w-full h-44">
        {/* Spec background lines */}
        <line x1="40" y1="20" x2="40" y2="160" stroke="#94a3b8" strokeDasharray="3 3" />
        <text x="40" y="15" textAnchor="middle" fill="#64748b" fontSize="9">LSL 49.95</text>

        <line x1="160" y1="20" x2="160" y2="160" stroke="#0284c7" strokeDasharray="2 2" />
        <text x="160" y="15" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="bold">Target 50.00</text>

        <line x1="280" y1="20" x2="280" y2="160" stroke="#e11d48" strokeDasharray="3 3" />
        <text x="280" y="15" textAnchor="middle" fill="#e11d48" fontSize="9" fontWeight="bold">USL 50.05</text>

        {/* MC-A Box Plot (Morning Shift) */}
        <text x="15" y="60" fill="#0369a1" fontSize="11" fontWeight="bold">MC-A</text>
        {/* Whisker line */}
        <line x1="110" y1="55" x2="210" y2="55" stroke="#0284c7" strokeWidth="2" />
        <line x1="110" y1="45" x2="110" y2="65" stroke="#0284c7" strokeWidth="2" />
        <line x1="210" y1="45" x2="210" y2="65" stroke="#0284c7" strokeWidth="2" />
        {/* Box Q1-Q3 */}
        <rect x="140" y="40" width="40" height="30" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" rx="3" />
        {/* Median Line */}
        <line x1="160" y1="40" x2="160" y2="70" stroke="#0369a1" strokeWidth="3" />
        <text x="160" y="83" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="bold">Med = 50.00</text>

        {/* MC-B Box Plot (Afternoon Shift) */}
        <text x="15" y="125" fill="#b45309" fontSize="11" fontWeight="bold">MC-B</text>
        {/* Whisker line */}
        <line x1="200" y1="120" x2="310" y2="120" stroke="#d97706" strokeWidth="2" />
        <line x1="200" y1="110" x2="200" y2="130" stroke="#d97706" strokeWidth="2" />
        <line x1="310" y1="110" x2="310" y2="130" stroke="#d97706" strokeWidth="2" />
        {/* Box Q1-Q3 */}
        <rect x="230" y="105" width="60" height="30" fill="#fef3c7" stroke="#d97706" strokeWidth="2" rx="3" />
        {/* Median Line */}
        <line x1="260" y1="105" x2="260" y2="135" stroke="#b45309" strokeWidth="3" />
        <text x="260" y="148" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">Med = 50.04</text>

        {/* Outlier Dot for MC-B */}
        <circle cx="380" cy="120" r="5" fill="#e11d48" stroke="#fff" strokeWidth="1.5" />
        <text x="380" y="108" textAnchor="middle" fill="#e11d48" fontSize="9" fontWeight="bold">
          Outlier (50.14)
        </text>
      </svg>

      <div className="p-2.5 rounded-lg bg-indigo-50 border border-indigo-200 text-xs text-indigo-950">
        <strong>การแปลผล:</strong> MC-A นิ่งและเกาะกลุ่มตรงกลางเป้าหมาย ส่วน MC-B ค่ากลางเริ่มเลื่อนสูงขึ้น (Median = 50.04) กล่องกว้างขึ้น และมี Outlier หลุดสเปกที่ 50.14 mm!
      </div>
    </div>
  );
};

// =============================================================
// 6. M1L4-S04: Interactive Pareto Chart
// =============================================================
export const ParetoChart: React.FC = () => {
  const items = [
    { defect: 'Scratch (รอยขีดข่วน)', count: 9, pct: 60.0, cum: 60.0 },
    { defect: 'Burr (ครีบคม)', count: 4, pct: 26.7, cum: 86.7 },
    { defect: 'Dent (รอยบุบ)', count: 1, pct: 6.7, cum: 93.3 },
    { defect: 'Crack (รอยร้าว)', count: 1, pct: 6.7, cum: 100.0 },
  ];

  return (
    <div className="rounded-xl border border-rose-300 bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Pareto Chart (พาเรโต)</span>
          <h4 className="text-sm font-bold text-slate-900">กฎ 80/20 จัดลำดับความสำคัญของเสียหน้างาน</h4>
        </div>
        <span className="rounded bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-800 border border-rose-200">
          Vital Few vs Trivial Many
        </span>
      </div>

      <div className="h-44 w-full flex items-end justify-between gap-3 pt-6 pb-2 border-b border-slate-300 relative">
        {/* 80% Cutoff Line */}
        <div className="absolute top-12 left-0 right-0 border-t-2 border-dashed border-amber-500 z-10 flex justify-end pr-2">
          <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-1.5 py-0.5 rounded -mt-2.5">
            เส้น 80% Cutoff
          </span>
        </div>

        {items.map((it) => (
          <div key={it.defect} className="flex-1 flex flex-col items-center gap-1 z-20">
            <span className="text-xs font-bold text-slate-800">{it.count} ชิ้น</span>
            <div
              className={`w-full rounded-t transition-all ${
                it.cum <= 86.7 ? 'bg-rose-600' : 'bg-slate-400'
              }`}
              style={{ height: `${(it.count / 10) * 120}px` }}
            />
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 text-center">
              {it.defect.split(' ')[0]}
            </span>
            <span className="text-[10px] font-mono text-amber-800 font-bold">
              สะสม {it.cum}%
            </span>
          </div>
        ))}
      </div>

      <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-950">
        <strong>สรุปการจัดการ:</strong> แก้ไขเพียง 2 ปัญหาแรก (<strong>Scratch + Burr</strong>) จะลดของเสียในกระบวนการได้ถึง <strong>86.7%</strong> ทันที!
      </div>
    </div>
  );
};

// =============================================================
// 7. M1L4-S05: Interactive Scatter Plot
// =============================================================
export const ScatterPlotChart: React.FC = () => {
  return (
    <div className="rounded-xl border border-emerald-300 bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Scatter Plot (แผนภาพการกระจาย)</span>
          <h4 className="text-sm font-bold text-slate-900">ความสัมพันธ์ระหว่าง อุณหภูมิแม่พิมพ์ vs ขนาดเพลา</h4>
        </div>
        <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-mono font-bold text-emerald-900 border border-emerald-300">
          r = +0.9949 (เชิงบวกสูงมาก)
        </span>
      </div>

      <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-2">
        <svg viewBox="0 0 400 160" className="w-full h-40">
          {/* Axis */}
          <line x1="40" y1="130" x2="380" y2="130" stroke="#64748b" strokeWidth="1.5" />
          <line x1="40" y1="20" x2="40" y2="130" stroke="#64748b" strokeWidth="1.5" />

          {/* Labels */}
          <text x="210" y="150" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">
            อุณหภูมิแม่พิมพ์ Mold Temp (°C: 174–180)
          </text>
          <text x="15" y="75" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold" transform="rotate(-90 15 75)">
            ขนาด (mm)
          </text>

          {/* Trendline */}
          <line x1="50" y1="120" x2="370" y2="35" stroke="#059669" strokeWidth="2.5" strokeDasharray="4 2" />

          {/* Points */}
          {WORKSHOP_SAMPLES.map((s, i) => {
            const cx = 50 + ((s.temp - 174) / 6) * 320;
            const cy = 125 - ((s.diam - 49.95) / 0.20) * 100;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="4"
                fill={s.diam > 50.05 ? '#e11d48' : '#0284c7'}
                stroke="#fff"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* Checklist Item 16: ข้อควรระวัง */}
      <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-950">
        <strong>ข้อควรระวัง:</strong> <strong>Correlation ≠ Causation</strong> — สหสัมพันธ์สูง (<InlineMarkdown text="$r = +0.99$" />) บอกว่าตัวแปรเปลี่ยนไปพร้อมกัน แต่ต้องพิสูจน์ทางวิศวกรรมเสมอว่าอุณหภูมิที่สูงขึ้นทำให้เนื้อโลหะขยายตัวจริง หรือมีปัจจัยแฝงอื่น!
      </div>
    </div>
  );
};

// =============================================================
// 8. M1L4-S06: Interactive Run Chart
// =============================================================
export const RunChart: React.FC = () => {
  return (
    <div className="rounded-xl border border-blue-300 bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Run Chart (กราฟแสดงแนวโน้มตามเวลา)</span>
          <h4 className="text-sm font-bold text-slate-900">ตรวจจับแนวโน้ม Upward Drift (ขนาดค่อยๆ ไหลสูงขึ้น)</h4>
        </div>
        <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-900 border border-blue-300">
          Time-Ordered
        </span>
      </div>

      <div className="relative rounded-xl border border-slate-200 bg-slate-900 p-3">
        <svg viewBox="0 0 420 160" className="w-full h-40">
          {/* Limits */}
          <line x1="30" y1="35" x2="410" y2="35" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="35" y="30" fill="#f43f5e" fontSize="9" fontWeight="bold">USL 50.05 mm</text>

          <line x1="30" y1="80" x2="410" y2="80" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
          <text x="35" y="75" fill="#38bdf8" fontSize="9">Target 50.00 mm</text>

          <line x1="30" y1="125" x2="410" y2="125" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="35" y="138" fill="#94a3b8" fontSize="9">LSL 49.95 mm</text>

          {/* Dividing MC-A vs MC-B line */}
          <line x1="220" y1="10" x2="220" y2="150" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
          <text x="120" y="20" fill="#7dd3fc" fontSize="9" fontWeight="bold">MC-A (ช่วงเช้า 08:00–12:30)</text>
          <text x="310" y="20" fill="#fcd34d" fontSize="9" fontWeight="bold">MC-B (ช่วงบ่าย 13:00–16:30)</text>

          {/* Line connecting points */}
          <polyline
            points={WORKSHOP_SAMPLES.map((s, idx) => {
              const x = 40 + (idx / (WORKSHOP_SAMPLES.length - 1)) * 360;
              const y = 80 - ((s.diam - 50.00) / 0.05) * 45;
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
          />

          {/* Points */}
          {WORKSHOP_SAMPLES.map((s, idx) => {
            const x = 40 + (idx / (WORKSHOP_SAMPLES.length - 1)) * 360;
            const y = 80 - ((s.diam - 50.00) / 0.05) * 45;
            const isOut = s.diam > 50.05;
            return (
              <circle
                key={s.id}
                cx={x}
                cy={y}
                r={isOut ? '5' : '3.5'}
                fill={isOut ? '#f43f5e' : '#38bdf8'}
                stroke="#ffffff"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-950">
        <strong>จุดเด่นของ Run Chart:</strong> Histogram มองไม่เห็นลำดับเวลา แต่ Run Chart เผยให้เห็นชัดเจนว่าขนาดชิ้นงานค่อยๆ ไหลสูงขึ้นเรื่อยๆ ในช่วงบ่าย จนทะลุเส้นสเปก USL!
      </div>
    </div>
  );
};
