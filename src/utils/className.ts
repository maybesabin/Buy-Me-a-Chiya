import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

/**
 * Combines class names intelligently by merging Tailwind classes and conditionally applying classes.
 * 
 * @param {...(string|Record<string, boolean>|undefined)} inputs - class names or conditional class objects
 * @returns {string} - merged class string
 */
export function cn(...inputs: Parameters<typeof clsx>) {
    return twMerge(clsx(...inputs))
}
