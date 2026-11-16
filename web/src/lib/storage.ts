import type { CourseProgressState } from './types';

const STORAGE_KEY = 'spc_training_m1_progress_v1';

export const DEFAULT_PROGRESS: CourseProgressState = {
  var_current_screen: 'M1L1-S01',
  var_completed_screens: [],
  var_lesson_scores: { L1: 0, L2: 0, L3: 0, L4: 0 },
  var_exam_score: 0,
  var_exam_passed: false,
  captionLang: 'th',
  showCaptions: true,
  autoPlay: true,
  audioSpeed: 1,
};

export interface ProgressStore {
  load(): CourseProgressState;
  save(next: Partial<CourseProgressState>): CourseProgressState;
  markScreenCompleted(screenId: string): CourseProgressState;
  reset(): CourseProgressState;
}

class LocalProgressStore implements ProgressStore {
  load(): CourseProgressState {
    if (typeof window === 'undefined') return DEFAULT_PROGRESS;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT_PROGRESS;
      const parsed = JSON.parse(raw) as Partial<CourseProgressState>;
      return {
        ...DEFAULT_PROGRESS,
        ...parsed,
        var_lesson_scores: {
          ...DEFAULT_PROGRESS.var_lesson_scores,
          ...(parsed.var_lesson_scores ?? {}),
        },
      };
    } catch {
      return DEFAULT_PROGRESS;
    }
  }

  save(next: Partial<CourseProgressState>): CourseProgressState {
    const current = this.load();
    const merged: CourseProgressState = {
      ...current,
      ...next,
      var_lesson_scores: {
        ...current.var_lesson_scores,
        ...(next.var_lesson_scores ?? {}),
      },
    };
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      window.dispatchEvent(new CustomEvent('spc-progress-updated', { detail: merged }));
    }
    return merged;
  }

  markScreenCompleted(screenId: string): CourseProgressState {
    const current = this.load();
    const set = new Set(current.var_completed_screens);
    set.add(screenId);
    return this.save({
      var_current_screen: screenId,
      var_completed_screens: Array.from(set),
    });
  }

  reset(): CourseProgressState {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new CustomEvent('spc-progress-updated', { detail: DEFAULT_PROGRESS }));
    }
    return DEFAULT_PROGRESS;
  }
}

export const progressStore: ProgressStore = new LocalProgressStore();
