import { type Metrics } from './metrics';

export type TypingResult = Metrics & {
  startedAt: number;
  endedAt: number;
  mode: 'time' | 'words';
  durationSeconds: number;
};

export function saveResult(result: TypingResult) {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem('typemeter-results');
    const list: TypingResult[] = raw ? JSON.parse(raw) : [];
    list.push(result);
    localStorage.setItem('typemeter-results', JSON.stringify(list.slice(-20)));
  } catch {
    // fail quietly
  }
}

export function getResults(): TypingResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('typemeter-results');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getPersonalBest() {
  const results = getResults();
  return results.reduce((best, item) => {
    if (!best || item.wpm > best.wpm) return item;
    return best;
  }, null as TypingResult | null);
}
