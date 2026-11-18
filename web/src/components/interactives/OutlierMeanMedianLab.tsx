import React, { useMemo, useState } from 'react';
import { InlineMarkdown } from '../MarkdownContent';

const DEFAULT_VALUES = [50.00, 50.01, 49.99, 50.02, 50.00];

export const OutlierMeanMedianLab: React.FC = () => {
  const [values, setValues] = useState<number[]>([...DEFAULT_VALUES]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([4]); // Default select item #5

  // Slider value reflects the average of selected items or the first selected item
  const activeSliderValue = useMemo(() => {
    if (selectedIndices.length === 0) return 50.0;
    return values[selectedIndices[0]];
  }, [values, selectedIndices]);

  const handleSliderChange = (newVal: number) => {
    if (selectedIndices.length === 0) return;
    setValues((prev) => {
      const next = [...prev];
      selectedIndices.forEach((idx) => {
        next[idx] = newVal;
      });
      return next;
    });
  };

  const toggleSelectIndex = (idx: number) => {
    setSelectedIndices((prev) => {
      if (prev.includes(idx)) {
        // Keep at least one item selected
        if (prev.length === 1) return prev;
        return prev.filter((i) => i !== idx);
      }
      return [...prev, idx].sort((a, b) => a - b);
    });
  };

  const selectAll = () => {
    if (selectedIndices.length === values.length) {
      setSelectedIndices([4]); // Keep only #5
    } else {
      setSelectedIndices([0, 1, 2, 3, 4]);
    }
  };

  const setPreset = (preset: 'normal' | 'low' | 'high' | 'both') => {
    if (preset === 'normal') {
      setValues([...DEFAULT_VALUES]);
      setSelectedIndices([4]);
    } else if (preset === 'low') {
      const next = [...DEFAULT_VALUES];
      next[0] = 30.0;
      setValues(next);
      setSelectedIndices([0]);
    } else if (preset === 'high') {
      const next = [...DEFAULT_VALUES];
      next[4] = 80.0;
      setValues(next);
      setSelectedIndices([4]);
    } else if (preset === 'both') {
      const next = [...DEFAULT_VALUES];
      next[0] = 30.0;
      next[4] = 80.0;
      setValues(next);
      setSelectedIndices([0, 4]);
    }
  };

  const stats = useMemo(() => {
    const mean = values.reduce((s, v) => s + v, 0) / values.length;
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal;
    const hasLowOutlier = values.some((v) => v <= 40);
    const hasHighOutlier = values.some((v) => v >= 60);
    const isOutlierPresent = hasLowOutlier || hasHighOutlier;
    return { mean, range, minVal, maxVal, hasLowOutlier, hasHighOutlier, isOutlierPresent };
  }, [values]);

  const selectedLabels = selectedIndices.map((i) => `#${i + 1}`).join(', ');

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs flex flex-col justify-between h-full">
      <div>
        {/* Header with Title and Presets */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                Interactive Simulator
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              แบบจำลองผลกระทบของ Outlier ต่อค่าเฉลี่ย
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setPreset('normal')}
              className="rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 transition shadow-2xs"
            >
              รีเซ็ตค่าปกติ (~50 mm)
            </button>
            <button
              type="button"
              onClick={() => setPreset('low')}
              className="rounded-lg border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-900 hover:bg-amber-100 transition shadow-2xs"
            >
              Outlier ต่ำ (30 mm)
            </button>
            <button
              type="button"
              onClick={() => setPreset('high')}
              className="rounded-lg border border-rose-300 bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-900 hover:bg-rose-100 transition shadow-2xs"
            >
              Outlier สูง (80 mm)
            </button>
          </div>
        </div>

        {/* Section 2 & 3: Selection & Slider (Range 30 to 80 mm) */}
        <div className="mb-3.5 rounded-xl bg-slate-50 p-3 sm:p-3.5 border border-slate-200">
          <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
            <span className="text-sky-950 font-bold">ลองเลือกชิ้นงานและปรับค่า:</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500 font-normal">
                กำลังปรับ {selectedLabels}:
              </span>
              <span
                className={`font-mono text-sm px-2 py-0.5 rounded font-extrabold ${
                  activeSliderValue <= 40
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : activeSliderValue >= 60
                    ? 'bg-rose-100 text-rose-900 border border-rose-300'
                    : 'bg-slate-200 text-slate-900'
                }`}
              >
                {activeSliderValue.toFixed(2)} mm
                {activeSliderValue <= 40 && ' ⚠️ Outlier ต่ำ!'}
                {activeSliderValue >= 60 && ' ⚠️ Outlier สูง!'}
              </span>
            </div>
          </div>

          <div className="relative flex items-center gap-2">
            <span className="text-xs font-bold font-mono text-slate-500">30</span>
            <input
              type="range"
              min={30}
              max={80}
              step={0.1}
              value={activeSliderValue}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              className="w-full accent-rose-600 h-2.5 bg-slate-200 rounded-lg cursor-pointer"
            />
            <span className="text-xs font-bold font-mono text-slate-500">80</span>
          </div>

          {/* Section 4: Multi-item Selector */}
          <div className="mt-3 pt-2.5 border-t border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-600">
                คลิกชิ้นงานเพื่อเลือกปรับค่า (เลือกได้มากกว่า 1 ชิ้น):
              </span>
              <button
                type="button"
                onClick={selectAll}
                className="text-[11px] font-bold text-sky-700 hover:text-sky-900 underline"
              >
                {selectedIndices.length === values.length ? 'ยกเลิกเลือกทั้งหมด' : 'เลือกทั้งหมด (5 ชิ้น)'}
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {values.map((v, i) => {
                const isSelected = selectedIndices.includes(i);
                const isOutlier = v <= 40 || v >= 60;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleSelectIndex(i)}
                    className={`rounded-xl p-2 text-center transition-all border flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-400 shadow-sm'
                        : 'bg-white border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-600">
                      <span>ชิ้นที่ #{i + 1}</span>
                      {isSelected && <span className="text-sky-700">✓</span>}
                    </div>
                    <div
                      className={`text-xs sm:text-sm font-black font-mono mt-0.5 ${
                        isOutlier ? 'text-rose-700 font-extrabold' : 'text-slate-900'
                      }`}
                    >
                      {v.toFixed(2)}
                    </div>
                    <span
                      className={`mt-1 text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                        v <= 40
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : v >= 60
                          ? 'bg-rose-100 text-rose-900 border border-rose-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {v <= 40 ? 'Outlier ต่ำ' : v >= 60 ? 'Outlier สูง' : 'ปกติ'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 5 & 6: Only 2 Stat Cards (Mean X̄ and Range R) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
          {/* Card 1: Mean (X̄) with KaTeX symbol */}
          <div
            className={`rounded-xl border p-3.5 transition-all ${
              stats.isOutlierPresent
                ? 'border-rose-300 bg-rose-50/90 shadow-xs ring-1 ring-rose-200'
                : 'border-slate-200 bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700">
              <span>ค่าเฉลี่ย Mean</span>
              <span className="inline-block bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-2xs">
                <InlineMarkdown text="$\bar{X}$" />
              </span>
              <span>{stats.isOutlierPresent ? '(ถูกดึงเอียง!)' : '(ปกติ)'}</span>
            </div>
            <div
              className={`text-2xl sm:text-3xl font-black font-mono mt-1 ${
                stats.isOutlierPresent ? 'text-rose-700' : 'text-slate-900'
              }`}
            >
              {stats.mean.toFixed(3)}
              <span className="text-xs font-normal text-slate-500 ml-1.5">mm</span>
            </div>
            <div className="mt-1 text-[11px] font-semibold text-slate-600">
              {stats.isOutlierPresent ? '⚠️ โดนค่า Outlier ดึงจุดศูนย์กลางกระบวนการ' : '✓ จุดกึ่งกลางตรงตามเป้าหมาย (~50.00 mm)'}
            </div>
          </div>

          {/* Card 2: Range (R) */}
          <div
            className={`rounded-xl border p-3.5 transition-all ${
              stats.range > 5
                ? 'border-amber-300 bg-amber-50/90 shadow-xs ring-1 ring-amber-200'
                : 'border-slate-200 bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700">
              <span>พิสัย Range</span>
              <span className="inline-block bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-2xs">
                <InlineMarkdown text="$R$" />
              </span>
              <span>(Max − Min)</span>
            </div>
            <div
              className={`text-2xl sm:text-3xl font-black font-mono mt-1 ${
                stats.range > 5 ? 'text-amber-900' : 'text-slate-900'
              }`}
            >
              {stats.range.toFixed(3)}
              <span className="text-xs font-normal text-slate-500 ml-1.5">mm</span>
            </div>
            <div className="mt-1 text-[11px] font-semibold text-slate-600">
              {stats.range > 5 ? '⚠️ ค่าแกว่งกว้างมากจากชิ้นงาน Outlier' : '✓ ช่วงความผันแปรแคบ สม่ำเสมอดี'}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Shop Floor Insight Callout Box */}
      <div className="mt-3.5 pt-2 border-t border-slate-100">
        {stats.isOutlierPresent ? (
          <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900 leading-relaxed shadow-xs flex items-start gap-2.5">
            <span className="text-base shrink-0">⚠️</span>
            <div>
              <span className="font-bold">ข้อสังเกตหน้างาน (พบ Outlier):</span> ข้อมูลมีค่าผิดปกติหลุดไปที่{' '}
              <strong className="font-mono text-rose-800">
                {stats.minVal <= 40 && `ต่ำสุด ${stats.minVal.toFixed(2)} mm`}
                {stats.minVal <= 40 && stats.maxVal >= 60 && ' และ '}
                {stats.maxVal >= 60 && `สูงสุด ${stats.maxVal.toFixed(2)} mm`}
              </strong>{' '}
              ส่งผลให้ค่าเฉลี่ย <strong className="font-bold">Mean (<InlineMarkdown text="$\bar{X}$" />)</strong> ถูกดึงเอียงไปเป็น{' '}
              <strong className="font-mono text-rose-800">{stats.mean.toFixed(3)} mm</strong> และทำให้ค่า{' '}
              <strong className="font-bold">Range (<InlineMarkdown text="$R$" />)</strong> ถ่างกว้างขึ้นเป็น{' '}
              <strong className="font-mono text-rose-800">{stats.range.toFixed(3)} mm</strong> ทันที! สะท้อนว่าค่าเฉลี่ยเลขคณิตจะวิ่งตาม Outlier เสมอ
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-3 text-xs text-sky-900 leading-relaxed shadow-xs flex items-start gap-2.5">
            <span className="text-base shrink-0">💡</span>
            <div>
              <span className="font-bold">สภาวะปกติ (ไม่มี Outlier):</span> ข้อมูลทั้ง 5 ชิ้นเกาะกลุ่มชิดกันที่ ~50 mm ส่งผลให้ค่าเฉลี่ย{' '}
              <strong className="font-bold">Mean (<InlineMarkdown text="$\bar{X}$" />)</strong> อยู่ที่{' '}
              <strong className="font-mono text-sky-900">{stats.mean.toFixed(3)} mm</strong> และค่า{' '}
              <strong className="font-bold">Range (<InlineMarkdown text="$R$" />)</strong> แคบเพียง{' '}
              <strong className="font-mono text-sky-900">{stats.range.toFixed(3)} mm</strong> กระบวนการมีความเสถียรและสม่ำเสมอสูง
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
