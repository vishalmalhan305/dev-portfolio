import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with proper precedence handling
 * Uses clsx for conditional classes and twMerge for conflict resolution
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
