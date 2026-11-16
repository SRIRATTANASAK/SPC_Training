import React, { useState } from 'react';
import { CopqIcebergSvg, EmpiricalRuleBellSvg, NoirScaleCards } from './Module1Visuals';

interface Props {
  assetIds: string[];
  screenId: string;
}

const IMAGE_MAP: Record<string, { src: string; caption: string }> = {
  'AST-M1-001': {
    src: '/images/module-01/AST-M1-001.jpg',
    caption: 'สายการผลิต CNC ยุคใหม่กับการติดตามค่าสถิติและ Variation แบบ Real-time',
  },
  'AST-M1-002': {
    src: '/images/module-01/AST-M1-002.jpg',
    caption: 'เปลี่ยนจากการจดบันทึกแบบเดิมสู่ Data-Driven Decision บนหน้าจอวิเคราะห์',
  },
  'AST-M1-006': {
    src: '/images/module-01/AST-M1-006.jpg',
    caption: 'Variable Data: การวัดค่าต่อเนื่องด้วย Micrometer, Torque Wrench และ Thermocouple',
  },
  'AST-M1-007': {
    src: '/images/module-01/AST-M1-007.jpg',
    caption: 'Attribute Data: การตรวจสอบ Pass/Fail และ Go/No-Go Plug Gauge',
  },
};

export const AssetViewer: React.FC<Props> = ({ assetIds, screenId }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  if (!assetIds || assetIds.length === 0) return null;

  return (
    <div className="space-y-4">
      {assetIds.map((id) => {
        if (IMAGE_MAP[id]) {
          const item = IMAGE_MAP[id];
          return (
            <figure key={id} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-sm">
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
                {id === 'AST-M1-002' && screenId === 'M1L1-S02' && (
                  <div className="absolute inset-0">
                    {[
                      { idx: 1, x: '28%', y: '56%', label: '1. Manual Paper Log (ช้า & เสี่ยงผิดพลาด)' },
                      { idx: 2, x: '72%', y: '34%', label: '2. Live SPC Dashboard (จับสัญญาณ Shift ทันที)' },
                      { idx: 3, x: '76%', y: '62%', label: '3. Pareto & Root Cause Priority' },
                    ].map((hs) => (
                      <button
                        key={hs.idx}
                        type="button"
                        onClick={() => setActiveHotspot(hs.idx)}
                        style={{ left: hs.x, top: hs.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-slate-950 ring-4 ring-amber-400/50 hover:scale-110 transition"
                        title={hs.label}
                      >
                        {hs.idx}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-2 bg-slate-900 px-4 py-2.5 text-xs text-slate-200">
                <span>
                  <strong className="text-sky-400">{id}</strong> — {item.caption}
                </span>
                {activeHotspot && id === 'AST-M1-002' && (
                  <span className="rounded bg-amber-500/20 px-2.5 py-1 text-amber-300 font-semibold">
                    {activeHotspot === 1 && 'Hotspot 1: กระดาษจดมือทำให้รู้ปัญหาช้า หลังผลิตของเสียไปแล้ว'}
                    {activeHotspot === 2 && 'Hotspot 2: กราฟ Real-time เตือนทันทีเมื่อ Mean หรือ SD เริ่มขยับ'}
                    {activeHotspot === 3 && 'Hotspot 3: จัดอันดับต้นตอด้วยข้อมูลจริง ไม่เดาสุ่ม'}
                  </span>
                )}
              </figcaption>
            </figure>
          );
        }

        if (id === 'AST-M1-003') return <CopqIcebergSvg key={id} />;
        if (id === 'AST-M1-010') return <NoirScaleCards key={id} />;
        if (id === 'AST-M1-016') return <EmpiricalRuleBellSvg key={id} />;

        return null;
      })}
    </div>
  );
};
