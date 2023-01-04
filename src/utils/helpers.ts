import { DateTime } from 'luxon';
import React from 'react';
import { Auth } from '../data';

/** Use this to stop mouse events from propagating */
export function stopPropagation<ElementType = unknown>(
  e: React.MouseEvent<ElementType, MouseEvent>,
): void {
  console.log('stopping');
  e.stopPropagation();
}

/**
 * A handy jQuery-like selector that makes accessing the DOM
 * easier, but won't include all of the overhead of the actual
 * jQuery library itself.
 */
export const $: typeof document.querySelector =
  document.querySelector.bind(document);

/**
 * This function will consistently process errors from our API, pulling out the
 * most important string data and returning a default if none is found
 */
export function readError(err: unknown): string {
  if (Auth.isAxiosError(err)) {
    return (
      err.response?.data?.message ?? err.response?.data?.error ?? err.message
    );
  } else if (err instanceof Error) {
    return err.message;
  } else return 'An unknown error occurred.';
}

/**
 * Use this function to debounce function calls. This will throttle the
 * amount of times they can be called each second. This should make for
 * more efficient code! Timeout defaults to 1 second (1000ms).
 */
export function debounce<
  Args extends unknown[] = unknown[],
  ResponseType = unknown,
>(
  func: (...args: Args) => ResponseType,
  timeout = 1000,
): (...args: Args) => void {
  let timer: NodeJS.Timeout;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
}

export function getAge(dob: string): number {
  return Math.floor(
    Math.abs(DateTime.fromFormat(dob, 'yyyy-MM-dd').diffNow('years').years),
  );
}
