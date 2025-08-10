export function isDark(): boolean {
  return document.documentElement.classList.contains('dark')
}

export function toggleTheme(): void {
  const el = document.documentElement
  el.classList.toggle('dark')
}


