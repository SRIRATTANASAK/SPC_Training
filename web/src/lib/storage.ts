import type { CourseProgressState } from './types';

const DEFAULT_STORAGE_KEY = 'spc_training_m1_progress_v1';

export function getDefaultProgress(moduleId = 'M1'): CourseProgressState {
  const norm = moduleId.toUpperCase().startsWith('M') ? moduleId.toUpperCase() : `M${moduleId}`;
  return {
    var_current_screen: `${norm}L1-S01`,
    var_completed_screens: [],
    var_lesson_scores: { L1: 0, L2: 0, L3: 0, L4: 0 },
    var_exam_score: 0,
    var_exam_passed: false,
    captionLang: 'th',
    showCaptions: true,
    autoPlay: true,
    audioSpeed: 1,
    audioVolume: 1,
    audioMuted: false,
  };
}

export const DEFAULT_PROGRESS: CourseProgressState = getDefaultProgress('M1');

export interface ProgressStore {
  load(): CourseProgressState;
  save(next: Partial<CourseProgressState>): CourseProgressState;
  markScreenCompleted(screenId: string): CourseProgressState;
  reset(): CourseProgressState;
}

export function getStorageKeyForModule(moduleId: string): string {
  const norm = moduleId.trim().toLowerCase();
  if (norm === 'm1' || norm === 'module-01' || norm === '1') {
    return DEFAULT_STORAGE_KEY;
  }
  const mMatch = norm.match(/^(?:module-0?|m)(\d+)$/);
  const shortId = mMatch ? `m${Number(mMatch[1])}` : norm;
  return `spc_training_${shortId}_progress_v1`;
}

class LocalProgressStore implements ProgressStore {
  private readonly storageKey: string;
  private readonly defaultState: CourseProgressState;

  constructor(moduleId = 'M1') {
    const mMatch = moduleId.trim().match(/^(?:module-0?|m)?(\d+)$/i);
    const normModuleId = mMatch ? `M${Number(mMatch[1])}` : moduleId.toUpperCase();
    this.storageKey = getStorageKeyForModule(normModuleId);
    this.defaultState = getDefaultProgress(normModuleId);
  }

  load(): CourseProgressState {
    if (typeof window === 'undefined') return this.defaultState;
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) return this.defaultState;
      const parsed = JSON.parse(raw) as Partial<CourseProgressState>;
      return {
        ...this.defaultState,
        ...parsed,
        var_lesson_scores: {
          ...this.defaultState.var_lesson_scores,
          ...(parsed.var_lesson_scores ?? {}),
        },
      };
    } catch {
      return this.defaultState;
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
      window.localStorage.setItem(this.storageKey, JSON.stringify(merged));
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
      window.localStorage.removeItem(this.storageKey);
      window.dispatchEvent(new CustomEvent('spc-progress-updated', { detail: this.defaultState }));
    }
    return this.defaultState;
  }
}

const storeCache = new Map<string, ProgressStore>();

export function getProgressStore(moduleId = 'M1'): ProgressStore {
  const key = getStorageKeyForModule(moduleId);
  let store = storeCache.get(key);
  if (!store) {
    store = new LocalProgressStore(moduleId);
    storeCache.set(key, store);
  }
  return store;
}

export const progressStore: ProgressStore = getProgressStore('M1');