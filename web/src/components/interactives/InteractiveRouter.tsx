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
import { CommonSpecialClassifier } from './CommonSpecialClassifier';
import { SeriesFpySimulator } from './SeriesFpySimulator';
import { ZScoreCalculator } from './ZScoreCalculator';
import { DistributionExplorer } from './DistributionExplorer';
import { DistributionSelectionMatrix } from './DistributionSelectionMatrix';
import { CltSimulator } from './CltSimulator';
import { CtqBoreAnalyzer } from './CtqBoreAnalyzer';

interface Props {
  screen: ScreenItem;
  moduleData: ModulePayload;
  stepIndex?: number;
}

export const InteractiveRouter: React.FC<Props> = ({ screen, moduleData, stepIndex = 0 }) => {
  const sid = screen.screenId;
  return (
    <div className="space-y-4">
      {/* Module 1 Interactives */}
      {sid === 'M1L1-S03' && <CopqCalculator />}
      {sid === 'M1L1-S04' && <VariationExplorer4M1E />}
      {sid === 'M1L1-S06' && <KnowledgeCheck lessonId="M1-L1" moduleId="M1" questions={moduleData.questions} />}

      {sid === 'M1L2-S04' && <DataClassificationLab rows={moduleData.workshops.classification ?? []} />}
      {sid === 'M1L2-S06' && <KnowledgeCheck lessonId="M1-L2" moduleId="M1" questions={moduleData.questions} />}

      {sid === 'M1L3-S01' && <OutlierMeanMedianLab title="แบบจำลองผลกระทบของ Outlier ต่อค่าเฉลี่ย" />}
      {sid === 'M1L3-S02' && (
        <OutlierMeanMedianLab
          title="แบบจำลองผลกระทบของ Outlier ต่อค่าเฉลี่ยและค่ามัธยฐาน"
          showMedian
        />
      )}
      {sid === 'M1L3-S06' && (stepIndex === 0 ? <SigmaSimulator /> : <StatMatchGame />)}
      {sid === 'M1L3-S07' && <KnowledgeCheck lessonId="M1-L3" moduleId="M1" questions={moduleData.questions} />}

      {sid === 'M1L4-S07' &&
        (stepIndex === 0 ? (
          <ChartSelectionMatrix />
        ) : (
          <FactoryDashboardWorkshop rows={moduleData.workshops.dimensionsAndDefects ?? []} />
        ))}
      {sid === 'M1L4-S08' && <FinalExam examId="EXAM-M1" moduleId="M1" questions={moduleData.questions} />}

      {/* Module 2 Interactives */}
      {sid === 'M2L1-S04' && <CommonSpecialClassifier />}
      {sid === 'M2L1-S05' && (
        <KnowledgeCheck
          lessonId="M2-L1"
          moduleId="M2"
          fixedQuestionIds={['M2-Q001', 'M2-Q005']}
          questions={moduleData.questions}
        />
      )}

      {sid === 'M2L2-S05' && <SeriesFpySimulator />}
      {sid === 'M2L2-S06' && (
        <KnowledgeCheck
          lessonId="M2-L2"
          moduleId="M2"
          fixedQuestionIds={['M2-Q012', 'M2-Q018']}
          questions={moduleData.questions}
        />
      )}

      {sid === 'M2L3-S03' && <ZScoreCalculator />}
      {sid === 'M2L3-S07' && <DistributionExplorer />}
      {sid === 'M2L3-S08' && <DistributionSelectionMatrix />}
      {sid === 'M2L3-S09' && (
        <KnowledgeCheck
          lessonId="M2-L3"
          moduleId="M2"
          fixedQuestionIds={['M2-Q026', 'M2-Q033', 'M2-Q040']}
          questions={moduleData.questions}
        />
      )}

      {sid === 'M2L4-S05' && <CltSimulator />}
      {sid === 'M2L4-S06' && <CtqBoreAnalyzer rows={moduleData.workshops.ctqBore ?? []} />}
      {sid === 'M2L4-S08' && <FinalExam examId="EXAM-M2" moduleId="M2" questions={moduleData.questions} />}
    </div>
  );
};
