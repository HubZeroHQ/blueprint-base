export interface IsActivePathOptions {
  /** Require an exact match instead of matching nested routes under href. */
  exact?: boolean;
}

/**
 * Determines whether `href` should be treated as the active navigation item
 * for the current `pathname`. Nested routes match by prefix (e.g. "/services"
 * matches "/services/consulting"), guarded by a trailing-slash boundary so
 * "/services" does not falsely match "/services-old".
 */
export function isActivePath(
  pathname: string,
  href: string,
  { exact = false }: IsActivePathOptions = {}
): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  if (exact) {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
