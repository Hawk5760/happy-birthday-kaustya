import { useState, useEffect } from 'react';

// In-memory fallbacks when storage is disabled / blocked
const memorySessionStore = new Map();
const memoryLocalStore = new Map();

/**
 * Hook for sessionStorage with safe try/catch and memory fallback.
 * Persists data only for the browser session.
 */
export function useSessionState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        const item = window.sessionStorage.getItem(key);
        return item !== null ? JSON.parse(item) : initialValue;
      }
    } catch {
      // Fall back to memory
      if (memorySessionStore.has(key)) {
        return memorySessionStore.get(key);
      }
    }
    return initialValue;
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
      } else {
        memorySessionStore.set(key, valueToStore);
      }
    } catch {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      memorySessionStore.set(key, valueToStore);
    }
  };

  return [state, setValue];
}

/**
 * Hook for localStorage with safe try/catch and memory fallback.
 * Persists data across visits.
 */
export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const item = window.localStorage.getItem(key);
        return item !== null ? JSON.parse(item) : initialValue;
      }
    } catch {
      if (memoryLocalStore.has(key)) {
        return memoryLocalStore.get(key);
      }
    }
    return initialValue;
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } else {
        memoryLocalStore.set(key, valueToStore);
      }
    } catch {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      memoryLocalStore.set(key, valueToStore);
    }
  };

  return [state, setValue];
}

export default useSessionState;
