// Editors often paste bare domains into Markdown links. Resolve them as web
// addresses instead of silently creating nonexistent paths inside the blog.
export function contentHref(href: string): string {
  const value = href.trim();
  const normalized = /^(?:www\.|[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.[a-z]{2,}(?:[/:?#]|$))/i.test(value)
    ? `https://${value}` : value;
  if (/^https?:\/\//i.test(normalized)) {
    try { new URL(normalized); } catch { return ""; }
  }
  return normalized;
}

export function isoDate(value?: string): string | undefined {
  const date = value ? new Date(value) : undefined;
  return date && Number.isFinite(date.getTime()) && date.getTime() <= Date.now()
    ? date.toISOString() : undefined;
}

export function displayDate(value: string) {
  return new Intl.DateTimeFormat("en-MU", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(value));
}
