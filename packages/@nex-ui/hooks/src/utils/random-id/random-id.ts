export function randomId(prefix = 'nex-ui-'): string {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}
