export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mehrshadb.ir";

export function withBasePath(path: string): string {
  if (path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }

  return path.startsWith("/") ? path : `/${path}`;
}
