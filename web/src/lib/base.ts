export function withBase(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const rawBase = import.meta.env.BASE_URL ?? '/';
  const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (base && (cleanPath === base || cleanPath.startsWith(`${base}/`))) {
    return cleanPath;
  }
  return `${base}${cleanPath}` || '/';
}
