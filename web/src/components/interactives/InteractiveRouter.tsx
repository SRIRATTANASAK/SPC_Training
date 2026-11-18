import React from 'react';
import type { ModulePayload, ScreenItem } from '../../lib/types';
import { VariationExplorer4M1E } from './VariationExplorer4M1E';
import { CopqCalculator } from './CopqCalculator';
import { DataClassificationLab } from './DataClassificationLab';
import { OutlierMeanMedianLab } from './OutlierMeanMedianLab';
import { SigmaSimulator } from './SigmaSimulator';
import { StatMatchGame } from './StatMatchGame';
import { ChartSelectionMatrix } from './ChartSelectionMatrix';
import { FactoryDashboardWorkshop } from './FactoryDashboardWorkshop';
import { KnowledgeCheck } from './KnowledgeCheck';
import { FinalExam } from './FinalExam';

interface Props {
  screen: ScreenItem;
  moduleData: ModulePayload;
  stepIndex?: number;
}

export const InteractiveRouter: React.FC<Props> = ({ screen, moduleData, stepIndex = 0 }) => {
  const sid = screen.screenId;
  return (
    <div className="space-y-4">
      {sid === 'M1L1-S03' && <CopqCalculator />}
      {sid === 'M1L1-S04' && <VariationExplorer4M1E />}
      {sid === 'M1L1-S06' && <KnowledgeCheck lessonId="M1-L1" questions={moduleData.questions} />}

      {sid === 'M1L2-S04' && <DataClassificationLab rows={moduleData.workshops.classification} />}
      {sid === 'M1L2-S06' && <KnowledgeCheck lessonId="M1-L2" questions={moduleData.questions} />}

      {sid === 'M1L3-S01' && <OutlierMeanMedianLab title="แบบจำลองผลกระทบของ Outlier ต่อค่าเฉลี่ย" />}
      {sid === 'M1L3-S02' && (
        <OutlierMeanMedianLab title="แบบจำลองผลกระทบของ Outlier ต่อค่าเฉลี่ยและค่ามัธยฐาน" />
      )}
      {sid === 'M1L3-S08' && (stepIndex === 0 ? <SigmaSimulator /> : <StatMatchGame />)}
      {sid === 'M1L3-S09' && <KnowledgeCheck lessonId="M1-L3" questions={moduleData.questions} />}

      {sid === 'M1L4-S07' &&
        (stepIndex === 0 ? (
          <ChartSelectionMatrix />
        ) : (
          <FactoryDashboardWorkshop rows={moduleData.workshops.dimensionsAndDefects} />
        ))}
      {sid === 'M1L4-S08' && <FinalExam questions={moduleData.questions} />}
    </div>
  );
};
