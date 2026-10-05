import { describe, expect, it } from 'vitest';
import { calculateMetrics } from './metrics';

describe('metrics', () => {
  it('handles 300 correct chars in 60s as 60 WPM', () => {
    const result = calculateMetrics({ correctCharacters: 300, incorrectCharacters: 0, totalTypedCharacters: 300, elapsedMs: 60000 });
    expect(result.wpm).toBeCloseTo(60, 5);
  });

  it('handles zero characters', () => {
    const result = calculateMetrics({ correctCharacters: 0, incorrectCharacters: 0, totalTypedCharacters: 0, elapsedMs: 60000 });
    expect(result.wpm).toBe(0);
    expect(result.rawWpm).toBe(0);
    expect(result.accuracy).toBe(100);
  });

  it('handles zero elapsed time', () => {
    const result = calculateMetrics({ correctCharacters: 30, incorrectCharacters: 0, totalTypedCharacters: 30, elapsedMs: 0 });
    expect(result.wpm).toBe(0);
  });

  it('counts corrected mistakes without final error count', () => {
    const result = calculateMetrics({ correctCharacters: 25, incorrectCharacters: 5, totalTypedCharacters: 30, elapsedMs: 30000, finalErrors: 2, totalMistakes: 5, correctedMistakes: 3 });
    expect(result.accuracy).toBeCloseTo(83.3333333333, 5);
  });

  it('tracks incorrect input', () => {
    const result = calculateMetrics({ correctCharacters: 15, incorrectCharacters: 10, totalTypedCharacters: 25, elapsedMs: 60000 });
    expect(result.accuracy).toBeCloseTo(60, 5);
  });

  it('handles partial completion', () => {
    const result = calculateMetrics({ correctCharacters: 80, incorrectCharacters: 20, totalTypedCharacters: 100, elapsedMs: 120000 });
    expect(result.wpm).toBeCloseTo(0.6666666667, 5);
  });

  it('handles mixed accuracy', () => {
    const result = calculateMetrics({ correctCharacters: 120, incorrectCharacters: 40, totalTypedCharacters: 160, elapsedMs: 60000 });
    expect(result.accuracy).toBeCloseTo(75, 5);
  });

  it('handles high-speed input', () => {
    const result = calculateMetrics({ correctCharacters: 500, incorrectCharacters: 10, totalTypedCharacters: 510, elapsedMs: 30000 });
    expect(result.wpm).toBeCloseTo(166.6666666667, 5);
  });

  it('matches the WPM calculator parity rule', () => {
    const sample = calculateMetrics({ correctCharacters: 300, incorrectCharacters: 10, totalTypedCharacters: 310, elapsedMs: 60000 });
    expect(sample.wpm).toBeCloseTo(60, 5);
    expect(sample.rawWpm).toBeCloseTo(61, 5);
  });
});
