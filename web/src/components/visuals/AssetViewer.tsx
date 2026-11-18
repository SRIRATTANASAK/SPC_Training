import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CopqIcebergSvg, EmpiricalRuleBellSvg, NoirScaleCards } from './Module1Visuals';
import { withBase } from '../../lib/base';

interface Props {
  assetIds: string[];
  screenId: string;
}

const IMAGE_MAP: Record<string, { src: string; caption: string }> = {
  'AST-M1-001': {
    src: withBase('/images/module-01/AST-M1-001.jpg'),
    caption: 'สายการผลิต CNC ยุคใหม่กับการติดตามค่าสถิติและ Variation แบบ Real-time',
  },
  'AST-M1-002': {
    src: withBase('/images/module-01/AST-M1-002.jpg'),
    caption: 'เปลี่ยนจากการจดบันทึกแบบเดิมสู่ Data-Driven Decision บนหน้าจอวิเคราะห์',
  },
  'AST-M1-006': {
    src: withBase('/images/module-01/AST-M1-006.jpg'),
    caption: 'Variable Data: การวัดค่าต่อเนื่องด้วย Micrometer, Torque Wrench และ Thermocouple',
  },
  'AST-M1-007': {
    src: withBase('/images/module-01/AST-M1-007.jpg'),
    caption: 'Attribute Data: การตรวจสอบ Pass/Fail และ Go/No-Go Plug Gauge',
  },
};

const M1L1_S02_HOTSPOTS = [
  {
    idx: 1,
    x: '36%',
    y: '58%',
    calloutClass: 'left-3 top-3 sm:left-4 sm:top-4',
    title: 'Hotspot 1: Trial & Error vs Root Cause',
    desc: 'กระดาษจดมือทำให้รู้ปัญหาช้า หลังผลิตของเสียไปแล้ว',
  },
  {
    idx: 2,
    x: '72%',
    y: '34%',
    calloutClass: 'right-3 top-3 sm:right-4 sm:top-4',
    title: 'Hotspot 2: Opinion vs Fact',
    desc: 'กราฟ Real-time เตือนทันทีเมื่อ Mean หรือ SD เริ่มขยับ',
  },
  {
    idx: 3,
    x: '75%',
    y: '66%',
    calloutClass: 'right-3 top-3 sm:right-4 sm:top-4',
    title: 'Hotspot 3: Firefighting vs Prevention',
    desc: 'จัดอันดับต้นตอด้วยข้อมูลจริง ไม่เดาสุ่ม',
  },
];

export const AssetViewer: React.FC<Props> = ({ assetIds, screenId }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  if (!assetIds || assetIds.length === 0) return null;

  // Special 2-image enlarged layout for M1L1-S01
  if (screenId === 'M1L1-S01') {
    const pair = ['AST-M1-001', 'AST-M1-002'].map((id) => ({ id, ...IMAGE_MAP[id] }));
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {pair.map((item) => (
          <figure
            key={item.id}
            className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-sm flex flex-col"
          >
            <img
              src={item.src}
              alt={item.caption}
              className="h-[220px] sm:h-[260px] lg:h-[290px] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="bg-slate-900 px-3 py-2 text-xs text-slate-200 text-center">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {assetIds.map((id) => {
        if (IMAGE_MAP[id]) {
          const item = IMAGE_MAP[id];
          const isHotspotScreen = id === 'AST-M1-002' && screenId === 'M1L1-S02';
          const currentHs = M1L1_S02_HOTSPOTS.find((h) => h.idx === activeHotspot);

          return (
            <figure
              key={id}
              className="relative rounded-xl border border-slate-200 bg-slate-900 shadow-sm"
            >
              <div className="relative flex justify-center bg-slate-950 rounded-t-xl overflow-visible">
                <img
                  src={item.src}
                  alt={item.caption}
                  className={`${
                    isHotspotScreen ? 'max-h-[260px] sm:max-h-[300px] lg:max-h-[330px]' : 'max-h-[220px] sm:max-h-[260px]'
                  } w-full object-cover rounded-t-xl`}
                  loading="lazy"
                />
                {isHotspotScreen && (
                  <div className="absolute inset-0">
                    {M1L1_S02_HOTSPOTS.map((hs) => {
                      const isActive = activeHotspot === hs.idx;
                      return (
                        <button
                          key={hs.idx}
                          type="button"
                          onClick={() => setActiveHotspot(isActive ? null : hs.idx)}
                          onMouseEnter={() => setActiveHotspot(hs.idx)}
                          style={{ left: hs.x, top: hs.y }}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold transition cursor-pointer ${
                            isActive
                              ? 'bg-sky-500 text-white ring-4 ring-sky-300 scale-115 shadow-lg'
                              : 'bg-amber-400 text-slate-950 ring-4 ring-amber-300/60 hover:scale-110'
                          }`}
                          title={hs.title}
                        >
                          {hs.idx}
                        </button>
                      );
                    })}

                    {currentHs && (
                      <div
                        className={`absolute z-20 w-64 sm:w-72 max-w-[85%] rounded-xl border border-amber-400 bg-slate-900/95 p-3 text-left text-xs text-white shadow-2xl backdrop-blur transition-all ${currentHs.calloutClass}`}
                      >
                        <div className="flex items-center justify-between gap-2 border-b border-slate-700/80 pb-1.5">
                          <span className="font-extrabold text-amber-300 text-xs sm:text-sm">
                            {currentHs.title}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveHotspot(null);
                            }}
                            className="rounded p-0.5 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                            title="ปิดคำอธิบาย"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <div className="mt-1.5 text-xs leading-relaxed text-slate-200">
                          {currentHs.desc}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-2 rounded-b-xl bg-slate-900 px-3 py-1.5 text-xs text-slate-200">
                <span>{item.caption}</span>
                {isHotspotScreen && (
                  <span className="text-[11px] font-semibold text-amber-300">
                    {currentHs ? `${currentHs.title}` : 'กดหรือชี้ที่จุด 1, 2, 3 บนภาพเพื่อดูคำอธิบาย'}
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
