import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
  audioTime?: number;
  isPlaying?: boolean;
}

interface BoneDef {
  id: number;
  key: string;
  nameTh: string;
  nameEn: string;
  triggerSec: number;
  endSec: number;
  details: string;
  side: 'top' | 'bottom';
  boneStartX: number;
  boneStartY: number;
  spineX: number;
  spineY: number;
  cardX: number;
  cardY: number;
  cardWidth: number;
  colorBorder: string;
  colorBg: string;
  colorText: string;
  colorDot: string;
}

const BONES: BoneDef[] = [
  // Top 3 bones
  {
    id: 1,
    key: 'material',
    nameTh: 'วัตถุดิบ',
    nameEn: 'Material',
    triggerSec: 13.8,
    endSec: 16.3,
    details: 'ความแข็ง Lot ต่างกัน, ขนาดวัตถุดิบคลาดเคลื่อน',
    side: 'top',
    boneStartX: 175,
    boneStartY: 65,
    spineX: 250,
    spineY: 135,
    cardX: 60,
    cardY: 12,
    cardWidth: 198,
    colorBorder: 'border-amber-400 stroke-amber-500',
    colorBg: 'fill-amber-50 bg-amber-50',
    colorText: 'text-amber-900',
    colorDot: 'bg-amber-500',
  },
  {
    id: 2,
    key: 'machine',
    nameTh: 'เครื่องจักร',
    nameEn: 'Machine',
    triggerSec: 16.3,
    endSec: 18.2,
    details: 'การสึกหรอของมีดกลึง (Tool Wear), Spindle สั่นสะเทือน',
    side: 'top',
    boneStartX: 375,
    boneStartY: 65,
    spineX: 450,
    spineY: 135,
    cardX: 265,
    cardY: 12,
    cardWidth: 198,
    colorBorder: 'border-sky-400 stroke-sky-500',
    colorBg: 'fill-sky-50 bg-sky-50',
    colorText: 'text-sky-950',
    colorDot: 'bg-sky-500',
  },
  {
    id: 3,
    key: 'method',
    nameTh: 'วิธีการทำงาน',
    nameEn: 'Method',
    triggerSec: 18.2,
    endSec: 20.3,
    details: 'ลำดับขั้นตอนการทำงาน, อัตราป้อน (Feed & Speed), แรงจับยึด',
    side: 'top',
    boneStartX: 575,
    boneStartY: 65,
    spineX: 650,
    spineY: 135,
    cardX: 470,
    cardY: 12,
    cardWidth: 230,
    colorBorder: 'border-indigo-400 stroke-indigo-500',
    colorBg: 'fill-indigo-50 bg-indigo-50',
    colorText: 'text-indigo-950',
    colorDot: 'bg-indigo-500',
  },
  // Bottom 3 bones
  {
    id: 4,
    key: 'man',
    nameTh: 'พนักงาน (คน)',
    nameEn: 'Man',
    triggerSec: 20.3,
    endSec: 22.4,
    details: 'ทักษะความชำนาญ, ความเมื่อยล้า, การสลับเปลี่ยนกะ',
    side: 'bottom',
    boneStartX: 175,
    boneStartY: 205,
    spineX: 250,
    spineY: 135,
    cardX: 60,
    cardY: 200,
    cardWidth: 198,
    colorBorder: 'border-emerald-400 stroke-emerald-500',
    colorBg: 'fill-emerald-50 bg-emerald-50',
    colorText: 'text-emerald-950',
    colorDot: 'bg-emerald-500',
  },
  {
    id: 5,
    key: 'measurement',
    nameTh: 'ระบบการวัด',
    nameEn: 'Measurement',
    triggerSec: 22.4,
    endSec: 24.6,
    details: 'เกจวัดขาดการสอบเทียบ, การอ่านค่าซ้ำของคนวัด (Gauge R&R)',
    side: 'bottom',
    boneStartX: 375,
    boneStartY: 205,
    spineX: 450,
    spineY: 135,
    cardX: 265,
    cardY: 200,
    cardWidth: 198,
    colorBorder: 'border-rose-400 stroke-rose-500',
    colorBg: 'fill-rose-50 bg-rose-50',
    colorText: 'text-rose-950',
    colorDot: 'bg-rose-500',
  },
  {
    id: 6,
    key: 'environment',
    nameTh: 'สภาพแวดล้อม',
    nameEn: 'Environment',
    triggerSec: 24.6,
    endSec: 27.5,
    details: 'อุณหภูมิโรงงานทำให้เหล็กขยายตัว, ความชื้น, แสงสว่าง',
    side: 'bottom',
    boneStartX: 575,
    boneStartY: 205,
    spineX: 650,
    spineY: 135,
    cardX: 470,
    cardY: 200,
    cardWidth: 230,
    colorBorder: 'border-teal-400 stroke-teal-500',
    colorBg: 'fill-teal-50 bg-teal-50',
    colorText: 'text-teal-950',
    colorDot: 'bg-teal-500',
  },
];

export const FishboneDiagram: React.FC<Props> = ({ audioTime = 0, isPlaying = false }) => {
  const [selectedBone, setSelectedBone] = useState<number | null>(null);

  // Determine which bones are visible according to voiceover narration
  const isBoneVisible = (bone: BoneDef) => {
    if (selectedBone === bone.id) return true;
    // When audio finishes or advances past factor list, all bones remain visible
    if (audioTime >= 26.5) return true;
    return audioTime >= bone.triggerSec;
  };

  // Determine which bone is currently being spoken
  const isBoneActiveNarration = (bone: BoneDef) => {
    if (!isPlaying) return false;
    return audioTime >= bone.triggerSec && audioTime < bone.endSec;
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Header Bar */}
      <div className="border-b border-slate-200 bg-slate-50/90 px-3.5 py-1.5">
        <h3 className="text-xs sm:text-sm font-extrabold text-slate-800">
          แผนภูมิก้างปลา (Ishikawa /Fish bone Diagram)  : แสดงแหล่งที่มาของความแปรปรวน
        </h3>
      </div>

      {/* SVG Canvas for Fishbone Diagram */}
      <div className="relative w-full p-2 sm:p-3 bg-gradient-to-b from-slate-50/50 to-white">
        <svg
          viewBox="0 0 940 270"
          className="w-full h-auto select-none overflow-visible max-h-[300px]"
        >
          <defs>
            {/* Fish Head Gradient */}
            <linearGradient id="fishHeadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>

            {/* Arrow Marker for Spine */}
            <marker
              id="spineArrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#0284c7" />
            </marker>

            {/* Bone Arrow Marker */}
            <marker
              id="boneArrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748b" />
            </marker>
          </defs>

          {/* Fish Tail (Left) */}
          <path
            d="M 50 135 L 12 75 L 30 135 L 12 195 Z"
            fill="#334155"
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Main Spine (Horizontal line ending at head) */}
          <line
            x1="50"
            y1="135"
            x2="738"
            y2="135"
            stroke="#0284c7"
            strokeWidth="4.5"
            strokeLinecap="round"
            markerEnd="url(#spineArrow)"
          />

          {/* Spine Vertebrae dots */}
          {[150, 250, 350, 450, 550, 650].map((x) => (
            <circle key={x} cx={x} cy={135} r="4" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
          ))}

          {/* Fish Head (Right): Displays "ความแปรปรวน" as requested */}
          <g className="cursor-pointer">
            <title>หัวปลา: ผลลัพธ์ความแปรปรวน (Variation / Effect)</title>
            {/* Fish head contour polygon with smooth nose */}
            <path
              d="M 740 75 C 820 75, 915 105, 932 135 C 915 165, 820 195, 740 195 Z"
              fill="url(#fishHeadGrad)"
              stroke="#38bdf8"
              strokeWidth="2.5"
              className="drop-shadow-md"
            />
            {/* Fish Gill line */}
            <path
              d="M 760 88 C 772 110, 772 160, 760 182"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
            {/* Fish Eye */}
            <circle cx="895" cy="115" r="5.5" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
            <circle cx="896.5" cy="114" r="2.5" fill="#0f172a" />
            <circle cx="898" cy="112.5" r="1" fill="#ffffff" />

            {/* Fish Head Text: "ความแปรปรวน" */}
            <text
              x="830"
              y="130"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="14"
              fontWeight="900"
              letterSpacing="0.5"
            >
              ความแปรปรวน
            </text>
            <text
              x="830"
              y="149"
              textAnchor="middle"
              fill="#bae6fd"
              fontSize="11"
              fontWeight="700"
            >
              (Variation)
            </text>
            <text
              x="830"
              y="167"
              textAnchor="middle"
              fill="#7dd3fc"
              fontSize="9"
              fontWeight="500"
            >
              Problem / Effect
            </text>
          </g>

          {/* 6 Fish Bones */}
          {BONES.map((bone) => {
            const visible = isBoneVisible(bone);
            const isSpeaking = isBoneActiveNarration(bone);
            const isSelected = selectedBone === bone.id;

            return (
              <g
                key={bone.id}
                className={`transition-all duration-500 ${
                  visible ? 'opacity-100' : 'opacity-20'
                }`}
                onClick={() => setSelectedBone(selectedBone === bone.id ? null : bone.id)}
                style={{ cursor: 'pointer' }}
              >
                {/* Diagonal Bone Line */}
                <line
                  x1={bone.boneStartX}
                  y1={bone.boneStartY}
                  x2={bone.spineX}
                  y2={bone.spineY}
                  stroke={visible ? (isSpeaking ? '#0284c7' : '#475569') : '#cbd5e1'}
                  strokeWidth={isSpeaking ? 3.5 : 2.5}
                  strokeDasharray={visible ? 'none' : '4 3'}
                  strokeLinecap="round"
                  markerEnd={visible ? 'url(#boneArrow)' : undefined}
                />

                {/* Sub-branch rib line (decorative industrial bone detail) */}
                {visible && (
                  <line
                    x1={bone.boneStartX + (bone.side === 'top' ? 38 : 38)}
                    y1={bone.boneStartY + (bone.side === 'top' ? 35 : -35)}
                    x2={bone.boneStartX + (bone.side === 'top' ? 70 : 70)}
                    y2={bone.boneStartY + (bone.side === 'top' ? 20 : -20)}
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                )}

                {/* Bone Factor Card (HTML foreignObject for crisp typography & Tailwind styling) */}
                <foreignObject
                  x={bone.cardX}
                  y={bone.cardY}
                  width={bone.cardWidth}
                  height="58"
                  className="overflow-visible"
                >
                  <div
                    className={`rounded-lg border px-2.5 py-1.5 shadow-sm transition-all text-left ${
                      isSpeaking
                        ? 'ring-2 ring-sky-500 scale-105 shadow-md bg-sky-50 border-sky-400'
                        : isSelected
                        ? 'ring-2 ring-amber-400 scale-102 bg-amber-50 border-amber-400'
                        : visible
                        ? `${bone.colorBg} ${bone.colorBorder}`
                        : 'bg-slate-100 border-slate-300 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span
                          className={`h-2 w-2 rounded-full shrink-0 ${
                            visible ? bone.colorDot : 'bg-slate-300'
                          } ${isSpeaking ? 'animate-ping' : ''}`}
                        />
                        <span className="font-extrabold text-xs text-slate-900 whitespace-nowrap">
                          {bone.id}. {bone.nameTh}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase shrink-0">
                        {bone.nameEn}
                      </span>
                    </div>
                    <div className="mt-0.5 text-[10px] leading-tight text-slate-600 line-clamp-2">
                      {bone.details}
                    </div>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Factor Quick Pills Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-slate-50 px-3.5 py-1.5 text-xs">
        <div className="flex items-center gap-1 text-[11px] text-slate-500">
          <Sparkles className="h-3 w-3 text-sky-600" />
          <span>คลิกที่ก้างปลาแต่ละปัจจัยเพื่อไฮไลต์ หรือดูตัวอย่างหน้างาน:</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {BONES.map((b) => {
            const isVis = isBoneVisible(b);
            const isSel = selectedBone === b.id;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setSelectedBone(selectedBone === b.id ? null : b.id)}
                className={`rounded-md px-2 py-0.5 text-[11px] font-bold transition ${
                  isSel
                    ? 'bg-amber-500 text-white shadow-sm'
                    : isVis
                    ? 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    : 'bg-slate-200/70 text-slate-400 border border-transparent'
                }`}
              >
                {b.id}. {b.nameTh}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
