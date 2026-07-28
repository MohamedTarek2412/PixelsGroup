// ============================================================
// PIXELS GROUP — Utility Functions
// ============================================================

/**
 * Merge class names conditionally
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format phone number for tel: link
 */
export function formatPhone(phone: string): string {
  return phone.replace(/\s+/g, "");
}

/**
 * Format WhatsApp link
 */
export function whatsappLink(phone: string, message?: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const number = cleaned.startsWith("0") ? `2${cleaned}` : cleaned;
  const encodedMsg = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${number}${encodedMsg}`;
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Map a value from one range to another
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Debounce a function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

/**
 * Check if we're in a browser environment
 */
export const isBrowser = typeof window !== "undefined";

/**
 * Check for reduced motion preference
 */
export function prefersReducedMotion(): boolean {
  if (!isBrowser) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Split text into words for word-by-word animation
 */
export function splitWords(text: string): string[] {
  return text.split(" ").filter(Boolean);
}

/**
 * Truncate text to a maximum length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}

/**
 * Pad a number with leading zeros
 */
export function padNumber(num: number, digits: number = 2): string {
  return String(num).padStart(digits, "0");
}
