export interface VoiceoverTrack {
  audioId: string;
  audioFile: string;
  duration: string;
  displayScriptTh: string;
  ttsCleanTh: string;
  enReference: string;
}

export interface ScreenItem {
  index: number;
  screenId: string;
  lessonId: string;
  lessonTitle: string;
  title: string;
  markdown: string;
  interactiveIds: string[];
  assetIds: string[];
  voiceover: VoiceoverTrack;
  prevScreenId: string | null;
  nextScreenId: string | null;
}

export interface QuestionItem {
  id: string;
  lo: string;
  bloom: string;
  difficulty: string;
  type: string;
  question: string;
  choices: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface ClassificationRow {
  Item_ID: string;
  Process_Area: string;
  Description: string;
  Example_Values: string;
  Category_Variable_or_Attribute: string;
  Data_Type_Continuous_or_Discrete: string;
  Measurement_Scale: string;
  Rationale: string;
}

export interface DimensionDefectRow {
  Sample_No: string;
  Timestamp: string;
  Shift: string;
  Machine: string;
  Mold_Temp_C: string;
  Shaft_Diameter_mm: string;
  Defect_Count: string;
  Defect_Type: string;
  Inspection_Result: string;
}

export interface ModulePayload {
  moduleId: string;
  moduleTitle: string;
  moduleTitleTh: string;
  totalScreens: number;
  lessons: { id: string; title: string; screens: string[] }[];
  screens: ScreenItem[];
  questions: QuestionItem[];
  workshops: {
    classification: ClassificationRow[];
    dimensionsAndDefects: DimensionDefectRow[];
  };
  resourcesMarkdown: string;
}

export interface CourseProgressState {
  var_current_screen: string;
  var_completed_screens: string[];
  var_lesson_scores: { L1: number; L2: number; L3: number; L4: number };
  var_exam_score: number;
  var_exam_passed: boolean;
  captionLang: 'th' | 'en';
  showCaptions: boolean;
  autoPlay: boolean;
  audioSpeed: 1 | 1.25;
}
