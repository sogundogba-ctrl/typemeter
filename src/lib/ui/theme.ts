export function getThemePreference() {
  if (typeof document === 'undefined') return 'light';
  const stored = localStorage.getItem('typemeter-theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: 'light' | 'dark') {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('typemeter-theme', theme);
}
