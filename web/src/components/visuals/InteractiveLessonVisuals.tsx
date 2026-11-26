import React, { useEffect, useState } from 'react';
import { InlineMarkdown } from '../MarkdownContent';
import type { DimensionDefectRow } from '../../lib/types';

// -------------------------------------------------------------
// ข้อมูลจริงจาก workshop_m1_dimensions_and_defects.csv (ส่งผ่าน moduleData.workshops)
// -------------------------------------------------------------
type CsvRow = DimensionDefectRow;

const LSL = 49.95;
const TARGET = 50.0;
const USL = 50.05;

const toSamples = (rows: CsvRow[]) =>
  rows.map((r) => ({
    id: Number(r.Sample_No),
    time: (r.Timestamp ?? '').split(' ')[1] ?? '',
    mc: r.Machine,
    temp: Number(r.Mold_Temp_C),
    diam: Number(r.Shaft_Diameter_mm),
    defectCount: Number(r.Defect_Count),
    defect: r.Defect_Type,
  }));

// โครงการ์ดกราฟมาตรฐาน: หัวเรื่อง → พื้นที่กราฟสูงเท่ากัน → กล่องคำอธิบายตำแหน่งเดียวกัน
const ChartCard: React.FC<{
  label: string;
  title: string;
  badge: string;
  explanation: React.ReactNode;
  children: React.ReactNode;
}> = ({ label, title, badge, explanation, children }) => (
  <div className="rounded-xl border border-sky-300 bg-white p-4 shadow-sm space-y-3">
    <div className="flex items-center justify-between gap-2">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">{label}</span>
        <h4 className="text-sm font-bold text-slate-900">{title}</h4>
      </div>
      <span className="shrink-0 rounded bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-900 border border-sky-300">
        {badge}
      </span>
    </div>
    <div className="h-56 rounded-xl border border-sky-200 bg-sky-50/50 p-2">{children}</div>
    <p className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs sm:text-sm leading-relaxed text-slate-800">
      {explanation}
    </p>
  </div>
);

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
      <div className="lg:col-span-5 space-y-3">
        {/* Card 1: Range */}
        <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-950">1. พิสัย (Range: R)</span>
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
            <span className="text-xs font-bold text-indigo-950">2. ความแปรปรวน (Variance: s²)</span>
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
            <span className="text-xs font-bold text-emerald-950">3. ส่วนเบี่ยงเบนมาตรฐาน (SD: s / σ)</span>
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
      <div className="lg:col-span-7 rounded-2xl border border-sky-200 bg-white p-4 shadow-sm space-y-3">
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
        <div className="relative rounded-xl border border-sky-200 bg-sky-50 p-3 overflow-hidden">
          <svg viewBox="-12 0 344 140" className="w-full h-48">
            {/* Shaded Areas */}
            <path
              d="M 20 120 C 60 120 110 30 160 30 C 210 30 260 120 300 120 Z"
              fill={activeSigma === 3 ? '#34d399' : '#bae6fd'}
              opacity={activeSigma === 3 ? '0.55' : '0.4'}
            />
            {activeSigma >= 2 && (
              <path
                d="M 60 120 C 90 120 120 30 160 30 C 200 30 230 120 260 120 Z"
                fill="#818cf8"
                opacity="0.55"
              />
            )}
            {activeSigma >= 1 && (
              <path
                d="M 110 120 C 130 120 140 30 160 30 C 180 30 190 120 210 120 Z"
                fill="#38bdf8"
                opacity="0.7"
              />
            )}
            {/* Outline curve */}
            <path
              d="M 20 120 C 60 120 110 30 160 30 C 210 30 260 120 300 120"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2.5"
            />
            {/* Mean Center line */}
            <line x1="160" y1="20" x2="160" y2="125" stroke="#0f172a" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="160" y="16" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">
              Mean ({mean.toFixed(3)})
            </text>
            {/* Bottom labels */}
            <text x="110" y="135" textAnchor="middle" fill="#334155" fontSize="9">−1σ</text>
            <text x="60" y="135" textAnchor="middle" fill="#334155" fontSize="9">−2σ</text>
            <text x="20" y="135" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="bold">−3σ (LCL)</text>
            <text x="210" y="135" textAnchor="middle" fill="#334155" fontSize="9">+1σ</text>
            <text x="260" y="135" textAnchor="middle" fill="#334155" fontSize="9">+2σ</text>
            <text x="300" y="135" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="bold">+3σ (UCL)</text>
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
// 3. M1L4-S01: Real Data Preview (Shaft Samples Table)
// =============================================================
export const Workshop2DataPreview: React.FC<{ rows: CsvRow[] }> = ({ rows }) => {
  const samples = toSamples(rows);
  const half = Math.ceil(samples.length / 2);
  const columns = [samples.slice(0, half), samples.slice(half)];
  // แถวบีบตามความสูงจอ เพื่อให้เห็นครบทุกแถวโดยไม่ต้องเลื่อน
  const rowStyle = { height: 'clamp(14px, 2.3vh, 22px)', lineHeight: 'clamp(14px, 2.3vh, 22px)' };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-x-2 bg-slate-900 px-3 py-1 text-xs sm:text-sm font-bold text-white">
        <span>ข้อมูลจริง {samples.length} แถว (ตัวอย่างการวัดชิ้นงาน)</span>
        <span className="font-mono text-[11px] text-sky-300">
          Spec: 50.00 ± 0.05 mm · <span className="text-rose-300">แถวสีแดง = เกิน USL</span>
        </span>
      </div>
      <div className="grid grid-cols-2 divide-x-2 divide-slate-300">
        {columns.map((group, col) => (
          <table key={col} className="w-full self-start border-collapse text-center text-[10px] xl:text-[11px]">
            <thead className="border-b border-slate-300 bg-slate-100 font-bold text-slate-800">
              <tr>
                <th className="px-0.5 py-0.5">#</th>
                <th className="px-0.5 py-0.5">เวลา</th>
                <th className="px-0.5 py-0.5">เครื่อง</th>
                <th className="px-0.5 py-0.5">°C</th>
                <th className="px-0.5 py-0.5">ขนาด (mm)</th>
                <th className="px-0.5 py-0.5">จำนวน</th>
                <th className="px-0.5 py-0.5">ของเสีย</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono">
              {group.map((row) => (
                <tr
                  key={row.id}
                  style={rowStyle}
                  className={`whitespace-nowrap ${row.diam > USL ? 'bg-rose-100 font-bold text-rose-900' : 'text-slate-700'}`}
                >
                  <td className="px-0.5 py-0 text-slate-500">{row.id}</td>
                  <td className="px-0.5 py-0">{row.time}</td>
                  <td className={`px-0.5 py-0 font-bold ${row.mc === 'MC-A' ? 'text-sky-700' : 'text-amber-700'}`}>{row.mc}</td>
                  <td className="px-0.5 py-0">{row.temp}</td>
                  <td className="px-0.5 py-0 font-bold">{row.diam.toFixed(2)}</td>
                  <td className="px-0.5 py-0">{row.defectCount}</td>
                  <td className="px-0.5 py-0 font-sans">
                    {row.defect === 'None' ? <span className="text-slate-400">ปกติ</span> : row.defect}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

// =============================================================
// 4. M1L4-S02: Histogram Shapes synced with narration
// =============================================================
// startAt = สัดส่วนของความยาวเสียง (0–1) ที่บทบรรยายเริ่มพูดถึงรูปร่างนั้น
// อ้างอิงช่วงเว้นวรรคของ AUD-M1L4-S02.mp3 ปัจจุบัน (ต้องตรวจซ้ำหลังสร้างเสียงใหม่)
const HISTOGRAM_SHAPES = [
  {
    key: 'bell',
    startAt: 0,
    tab: 'ระฆังคว่ำ (ตรงเป้า)',
    name: 'Normal / Bell-shaped',
    look: 'ระฆังคว่ำสมมาตร',
    cause: 'กระบวนการเสถียรตามธรรมชาติ (Common cause เท่านั้น)',
    bars: [2, 5, 9, 12, 9, 5, 2],
  },
  {
    key: 'skewed',
    startAt: 0.46,
    tab: 'เบ้ซ้าย/ขวา',
    name: 'Skewed (Right/Left)',
    look: 'หางยาวข้างเดียว',
    cause: 'มีขีดจำกัดทางกายภาพด้านหนึ่ง หรือเกิด Tool wear ไหลทางเดียว',
    bars: [5, 12, 10, 7, 4, 2, 1],
  },
  {
    key: 'cliff',
    startAt: 0.55,
    tab: 'หน้าผา (Cliff)',
    name: 'Cliff / Truncated',
    look: 'ขอบตัดตรงเป็นหน้าผา',
    cause: 'มีการคัดงานเสีย (100% Sorting) ทิ้งไปก่อนบันทึกข้อมูล!',
    bars: [2, 4, 7, 10, 12, 0, 0],
  },
] as const;

type ShapeKey = (typeof HISTOGRAM_SHAPES)[number]['key'];

export const HistogramChart: React.FC<{ audioTime?: number; audioDuration?: number }> = ({
  audioTime = 0,
  audioDuration = 0,
}) => {
  const progress = audioDuration > 0 ? audioTime / audioDuration : 0;
  const cued = [...HISTOGRAM_SHAPES].reverse().find((s) => progress >= s.startAt) ?? HISTOGRAM_SHAPES[0];
  const [manual, setManual] = useState<ShapeKey | null>(null);
  // เมื่อเสียงข้ามไปช่วงใหม่ ให้กลับมาตามเสียง
  useEffect(() => setManual(null), [cued.key]);
  const shape = HISTOGRAM_SHAPES.find((s) => s.key === manual) ?? cued;

  return (
    <div className="rounded-xl border border-sky-300 bg-white p-4 shadow-sm space-y-3">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Histogram (ฮิสโตแกรม)</span>
        <h4 className="text-sm font-bold text-slate-900">รูปร่างการกระจายตัวของข้อมูล</h4>
      </div>
      <div className="flex gap-1 rounded-lg bg-sky-50 p-1 text-xs">
        {HISTOGRAM_SHAPES.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setManual(s.key)}
            aria-pressed={shape.key === s.key}
            className={`flex-1 rounded px-2 py-1 font-bold transition ${
              shape.key === s.key ? 'bg-sky-700 text-white shadow-sm' : 'text-slate-700 hover:bg-sky-100'
            }`}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div className="h-48 w-full flex items-end justify-between gap-1 rounded-xl border border-sky-200 bg-sky-50/50 px-4 pt-4">
        {shape.bars.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-sky-500 transition-all duration-500"
            style={{ height: `${(v / 12) * 100}%` }}
          />
        ))}
      </div>
      <div className="text-center text-[11px] text-slate-500">ภาพจำลองเพื่ออธิบายรูปร่าง (ไม่ใช่ข้อมูลวัดจริง)</div>

      <div className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm leading-relaxed text-slate-800">
        <strong className="text-sky-900">{shape.name}</strong> — {shape.look}: {shape.cause}
      </div>
    </div>
  );
};

// =============================================================
// 5. M1L4-S03: Interactive Box Plot Chart
// =============================================================
export const BoxPlotChart: React.FC = () => {
  return (
    <ChartCard
      label="Box Plot (แผนภาพกล่อง)"
      title="เปรียบเทียบ MC-A vs MC-B และตรวจจับ Outlier"
      badge="5-Point Summary"
      explanation={
        <>
          <strong>การอ่านกราฟ:</strong> Box Plot สรุปข้อมูลด้วย Min (ปลาย Whisker ล่าง), Q1 (25%), Median (เส้นกลางกล่อง
          50%), Q3 (75%) และ Max (ปลาย Whisker บน) ส่วนจุด Outlier คือค่าที่มากกว่า Q3 + 1.5×IQR หรือน้อยกว่า Q1 − 1.5×IQR{' '}
          <strong>การแปลผล:</strong> MC-A นิ่งและเกาะกลุ่มตรงกลางเป้าหมาย ส่วน MC-B ค่ากลางเริ่มเลื่อนสูงขึ้น (Median =
          50.04) กล่องกว้างขึ้น และมี Outlier หลุดสเปกที่ 50.14 mm!
        </>
      }
    >
      <svg viewBox="0 0 420 180" className="w-full h-full">
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
    </ChartCard>
  );
};

// =============================================================
// 6. M1L4-S04: Interactive Pareto Chart
// =============================================================
export const ParetoChart: React.FC<{ rows: CsvRow[] }> = ({ rows }) => {
  // นับจำนวนจุดเสียจาก CSV (ถ่วงด้วย Defect_Count) เรียงมากไปน้อย แล้วคิดเปอร์เซ็นต์สะสม
  const counts = new Map<string, number>();
  toSamples(rows).forEach((s) => {
    if (s.defect !== 'None' && s.defectCount > 0) counts.set(s.defect, (counts.get(s.defect) ?? 0) + s.defectCount);
  });
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const total = sorted.reduce((sum, [, v]) => sum + v, 0);
  let running = 0;
  const items = sorted.map(([defect, count]) => {
    running += count;
    return { defect, count, cum: total ? (running / total) * 100 : 0 };
  });
  const topTwo = items[1] ?? items[0];

  // สเกลกราฟ: แกนซ้าย 0..จำนวนสูงสุด, แกนขวา 0..100%
  const left = 52;
  const right = 408;
  const top = 40;
  const bottom = 180;
  const maxCount = Math.max(1, ...items.map((i) => i.count));
  const slot = (right - left) / Math.max(items.length, 1);
  const xOf = (i: number) => left + slot * (i + 0.5);
  const yCount = (v: number) => bottom - (v / maxCount) * (bottom - top);
  const yPct = (v: number) => bottom - (v / 100) * (bottom - top);
  const countTicks = Array.from({ length: Math.floor(maxCount / 3) + 1 }, (_, i) => i * 3);
  if (countTicks[countTicks.length - 1] !== maxCount) countTicks.push(maxCount);

  return (
    <div className="rounded-xl border border-sky-300 bg-white p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Pareto Chart (พาเรโต)</span>
          <h4 className="text-sm font-bold text-slate-900">กฎ 80/20 จัดลำดับความสำคัญของเสียหน้างาน</h4>
        </div>
        <span className="shrink-0 rounded bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-900 border border-sky-300">
          Vital Few vs Trivial Many
        </span>
      </div>

      <div className="rounded-xl border border-sky-200 bg-sky-50/50 p-2">
        <svg viewBox="0 0 460 210" className="w-full h-60" role="img" aria-label="กราฟพาเรโตของเสียพร้อมเส้นเปอร์เซ็นต์สะสม">
          <text x={left} y="14" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="bold">จำนวน (จุด)</text>
          <text x={right} y="14" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">สะสม (%)</text>
          <line x1={left} y1={top} x2={left} y2={bottom} stroke="#64748b" strokeWidth="1.2" />
          <line x1={right} y1={top} x2={right} y2={bottom} stroke="#b45309" strokeWidth="1.2" />
          <line x1={left} y1={bottom} x2={right} y2={bottom} stroke="#64748b" strokeWidth="1.2" />

          {countTicks.map((v) => (
            <g key={`c${v}`}>
              <line x1={left - 4} y1={yCount(v)} x2={left} y2={yCount(v)} stroke="#64748b" />
              <text x={left - 7} y={yCount(v) + 3} textAnchor="end" fill="#334155" fontSize="9">{v}</text>
            </g>
          ))}
          {[0, 20, 40, 60, 80, 100].map((v) => (
            <g key={`p${v}`}>
              <line x1={right} y1={yPct(v)} x2={right + 4} y2={yPct(v)} stroke="#b45309" />
              <text x={right + 7} y={yPct(v) + 3} fill="#92400e" fontSize="9">{v}%</text>
            </g>
          ))}

          {items.map((it, i) => (
            <g key={it.defect}>
              <rect
                data-bar={it.defect}
                x={xOf(i) - slot * 0.32}
                y={yCount(it.count)}
                width={slot * 0.64}
                height={bottom - yCount(it.count)}
                fill={i < 2 ? '#0284c7' : '#94a3b8'}
                rx="2"
              />
              <text x={xOf(i)} y={bottom - 5} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                {it.count}
              </text>
              <text x={xOf(i)} y={bottom + 14} textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">
                {it.defect}
              </text>
            </g>
          ))}

          {/* เส้นอ้างอิง 80% ตามสเกลแกนขวา */}
          <line data-ref="80" x1={left} y1={yPct(80)} x2={right} y2={yPct(80)} stroke="#e11d48" strokeWidth="1.5" strokeDasharray="5 3" />
          <text x={right - 6} y={yPct(80) + 12} textAnchor="end" fill="#be123c" fontSize="10" fontWeight="bold">80%</text>

          <polyline
            points={items.map((it, i) => `${xOf(i)},${yPct(it.cum)}`).join(' ')}
            fill="none"
            stroke="#d97706"
            strokeWidth="2.5"
          />
          {items.map((it, i) => (
            <g key={`m${it.defect}`}>
              <circle data-cum={it.cum.toFixed(1)} cx={xOf(i)} cy={yPct(it.cum)} r="4" fill="#d97706" stroke="#ffffff" strokeWidth="1.5" />
              <text x={xOf(i)} y={yPct(it.cum) - 8} textAnchor="middle" fill="#92400e" stroke="#ffffff" strokeWidth="3" paintOrder="stroke" fontSize="10" fontWeight="bold">
                {it.cum.toFixed(1)}%
              </text>
            </g>
          ))}
        </svg>
      </div>

      {topTwo && (
        <p className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs sm:text-sm leading-relaxed text-slate-800">
          <strong>สรุปการจัดการ:</strong> แก้ไขเพียง 2 ปัญหาแรก (
          <strong>
            {items[0].defect} + {topTwo.defect}
          </strong>
          ) จะลดของเสียในกระบวนการได้ถึง <strong>{topTwo.cum.toFixed(1)}%</strong> ทันที! (จุดเสียรวม {total} จุด)
        </p>
      )}
    </div>
  );
};

// =============================================================
// 7. M1L4-S05: Scatter Plot
// =============================================================
export const ScatterPlotChart: React.FC<{ rows: CsvRow[] }> = ({ rows }) => {
  const samples = toSamples(rows);
  const n = samples.length || 1;
  const meanX = samples.reduce((a, s) => a + s.temp, 0) / n;
  const meanY = samples.reduce((a, s) => a + s.diam, 0) / n;
  const sxy = samples.reduce((a, s) => a + (s.temp - meanX) * (s.diam - meanY), 0);
  const sxx = samples.reduce((a, s) => a + (s.temp - meanX) ** 2, 0);
  const syy = samples.reduce((a, s) => a + (s.diam - meanY) ** 2, 0);
  const r = sxx && syy ? sxy / Math.sqrt(sxx * syy) : 0;
  const slope = sxx ? sxy / sxx : 0;

  const temps = samples.map((s) => s.temp);
  const minT = samples.length ? Math.min(...temps) : 0;
  const maxT = samples.length ? Math.max(...temps) : 1;
  const xOf = (t: number) => 62 + ((t - minT) / (maxT - minT || 1)) * 320;
  // แกน Y 49.96–50.16 mm เว้นขอบให้จุดไม่ล้น
  const yOf = (d: number) => 150 - ((d - 49.96) / 0.2) * 135;

  return (
    <ChartCard
      label="Scatter Plot (แผนภาพการกระจาย)"
      title="ความสัมพันธ์ระหว่าง อุณหภูมิแม่พิมพ์ vs ขนาดเพลา"
      badge={`r = ${r >= 0 ? '+' : ''}${r.toFixed(4)}`}
      explanation={
        <>
          <strong>การอ่านกราฟ:</strong> พล็อตตัวแปรต้น X (อุณหภูมิแม่พิมพ์, แกนนอน) กับตัวแปรผล Y (ขนาดเพลา, แกนตั้ง)
          เพื่อประเมินทิศทางและความแรงของสหสัมพันธ์ ข้อมูล Workshop 2 ให้ค่า{' '}
          <InlineMarkdown text={`$r = +${r.toFixed(4)}$`} /> (สหสัมพันธ์เชิงบวกสูงมาก) <strong>ข้อควรระวัง:</strong>{' '}
          <strong>Correlation ≠ Causation</strong> — สหสัมพันธ์สูงบอกว่าตัวแปรเปลี่ยนไปพร้อมกัน แต่ต้องพิสูจน์ทางวิศวกรรมเสมอว่า
          อุณหภูมิที่สูงขึ้นทำให้เนื้อโลหะขยายตัวจริง หรือมีปัจจัยแฝงอื่น!
        </>
      }
    >
      <svg viewBox="0 0 400 190" className="w-full h-full">
        <line x1="50" y1="160" x2="392" y2="160" stroke="#64748b" strokeWidth="1.5" />
        <line x1="50" y1="8" x2="50" y2="160" stroke="#64748b" strokeWidth="1.5" />
        {[50.0, 50.05, 50.1, 50.15].map((v) => (
          <text key={v} x="46" y={yOf(v) + 3} textAnchor="end" fill="#475569" fontSize="9">
            {v.toFixed(2)}
          </text>
        ))}
        <text x={xOf(minT)} y="172" textAnchor="middle" fill="#475569" fontSize="9">{minT}</text>
        <text x={xOf(maxT)} y="172" textAnchor="middle" fill="#475569" fontSize="9">{maxT}</text>
        <text x="220" y="185" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold">
          อุณหภูมิแม่พิมพ์ Mold Temp (°C: {minT}–{maxT})
        </text>
        <text x="12" y="84" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="bold" transform="rotate(-90 12 84)">
          ขนาด (mm)
        </text>

        {/* เส้นแนวโน้ม (least squares) */}
        <line
          x1={xOf(minT)}
          y1={yOf(meanY + slope * (minT - meanX))}
          x2={xOf(maxT)}
          y2={yOf(meanY + slope * (maxT - meanX))}
          stroke="#059669"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        {samples.map((s) => (
          <circle
            key={s.id}
            cx={xOf(s.temp)}
            cy={yOf(s.diam)}
            r="4"
            fill={s.diam > USL ? '#e11d48' : '#0284c7'}
            stroke="#fff"
            strokeWidth="1"
          />
        ))}
      </svg>
    </ChartCard>
  );
};

// =============================================================
// 8. M1L4-S06: Run Chart
// =============================================================
export const RunChart: React.FC<{ rows: CsvRow[] }> = ({ rows }) => {
  const samples = toSamples(rows);
  const xOf = (idx: number) => 40 + (idx / Math.max(samples.length - 1, 1)) * 330;
  // แกน Y 49.94–50.15 mm ภายในพื้นที่ y = 25..170 (เว้นขอบให้จุดไม่ล้น)
  const yOf = (d: number) => 170 - ((d - 49.94) / 0.21) * 145;
  const firstB = samples.findIndex((s) => s.mc === 'MC-B');
  const split = firstB > 0 ? (xOf(firstB - 1) + xOf(firstB)) / 2 : null;
  const range = (mc: string) => {
    const group = samples.filter((s) => s.mc === mc);
    return group.length ? `${group[0].time}–${group[group.length - 1].time}` : '';
  };

  return (
    <ChartCard
      label="Run Chart (กราฟแสดงแนวโน้มตามเวลา)"
      title="ตรวจจับแนวโน้ม Upward Drift (ขนาดค่อยๆ ไหลสูงขึ้น)"
      badge="Time-Ordered"
      explanation={
        <>
          <strong>จุดเด่นของ Run Chart:</strong> Histogram มองไม่เห็นลำดับเวลา แต่ Run Chart พล็อตข้อมูลเรียงตามเวลาการผลิต
          เมื่อพล็อต Sample 1..30 ตามเวลา 08:00–16:30 จะเห็นชัดว่าช่วงเช้า (MC-A) นิ่ง แต่ช่วงบ่าย (MC-B) ขนาดเพลาค่อยๆ
          ไหลสูงขึ้นเรื่อยๆ (Upward Drift) จนทะลุเส้นสเปก USL (50.05 mm) จึงใช้จับสัญญาณการเลื่อน (Shift), ไหลเอียง (Drift)
          หรือเป็นรอบ (Cycles) ก่อนเติมเส้น Control Limits ใน SPC
        </>
      }
    >
      <svg viewBox="0 0 460 190" className="w-full h-full">
        <rect x="25" y="4" width="432" height="182" fill="#ffffff" rx="6" />
        {[
          { v: USL, color: '#e11d48', text: 'USL 50.05 mm' },
          { v: TARGET, color: '#0284c7', text: 'Target 50.00 mm' },
          { v: LSL, color: '#64748b', text: 'LSL 49.95 mm' },
        ].map((l) => (
          <g key={l.text}>
            <line x1="30" y1={yOf(l.v)} x2="378" y2={yOf(l.v)} stroke={l.color} strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="382" y={yOf(l.v) + 3} fill={l.color} fontSize="9" fontWeight="bold">
              {l.text}
            </text>
          </g>
        ))}

        {split !== null && (
          <line x1={split} y1="10" x2={split} y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 4" />
        )}
        <text x="122" y="16" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="bold">
          MC-A (ช่วงเช้า {range('MC-A')})
        </text>
        <text x="288" y="16" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="bold">
          MC-B (ช่วงบ่าย {range('MC-B')})
        </text>

        <polyline
          points={samples.map((s, idx) => `${xOf(idx)},${yOf(s.diam)}`).join(' ')}
          fill="none"
          stroke="#d97706"
          strokeWidth="2"
        />
        {samples.map((s, idx) => (
          <circle
            key={s.id}
            cx={xOf(idx)}
            cy={yOf(s.diam)}
            r={s.diam > USL ? 5 : 3.5}
            fill={s.diam > USL ? '#e11d48' : '#0284c7'}
            stroke="#ffffff"
            strokeWidth="1"
          />
        ))}
      </svg>
    </ChartCard>
  );
};
