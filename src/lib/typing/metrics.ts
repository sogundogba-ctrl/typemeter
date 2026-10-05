export type Metrics = {
  wpm: number;
  rawWpm: number;
  accuracy: number;
  correctCharacters: number;
  incorrectCharacters: number;
  totalTypedCharacters: number;
  finalErrors: number;
  totalMistakes: number;
  correctedMistakes: number;
  elapsedMs: number;
  minutes: number;
};

export function calculateMetrics(input: {
  correctCharacters: number;
  incorrectCharacters: number;
  totalTypedCharacters: number;
  elapsedMs: number;
  finalErrors?: number;
  totalMistakes?: number;
  correctedMistakes?: number;
}): Metrics {
  const elapsedMs = Math.max(0, input.elapsedMs || 0);
  const minutes = elapsedMs > 0 ? elapsedMs / 60000 : 0;
  const correctCharacters = Math.max(0, input.correctCharacters || 0);
  const incorrectCharacters = Math.max(0, input.incorrectCharacters || 0);
  const totalTypedCharacters = Math.max(0, input.totalTypedCharacters || 0);
  const finalErrors = Math.max(0, input.finalErrors || 0);
  const totalMistakes = Math.max(0, input.totalMistakes || 0);
  const correctedMistakes = Math.max(0, input.correctedMistakes || 0);

  const safeMinutes = minutes > 0 ? minutes : 1;
  const wpm = minutes > 0 ? (correctCharacters / 5) / minutes : 0;
  const rawWpm = minutes > 0 ? (totalTypedCharacters / 5) / minutes : 0;
  const accuracy = totalTypedCharacters > 0 ? (correctCharacters / totalTypedCharacters) * 100 : 100;

  return {
    wpm: Number.isFinite(wpm) ? wpm : 0,
    rawWpm: Number.isFinite(rawWpm) ? rawWpm : 0,
    accuracy: Number.isFinite(accuracy) ? accuracy : 100,
    correctCharacters,
    incorrectCharacters,
    totalTypedCharacters,
    finalErrors,
    totalMistakes,
    correctedMistakes,
    elapsedMs,
    minutes,
  };
}
