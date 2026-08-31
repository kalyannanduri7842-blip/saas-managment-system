
import { useState, useEffect, useCallback, useRef, useMemo } from "react";

/**
 * Custom React hook: useFilter
 * Provides reusable stateful logic for the SaaS Management Platform UI.
 */
export function useFilter(initialValue, options = {}) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const mountedRef = useRef(true);
  const optionsRef = useRef(options);

  useEffect(() => {
    mountedRef.current = true;
    optionsRef.current = options;
    return () => { mountedRef.current = false; };
  }, [options]);

  const update = useCallback((next) => {
    if (!mountedRef.current) return;
    setValue((prev) => (typeof next === "function" ? next(prev) : next));
  }, []);

  const reset = useCallback(() => {
    if (!mountedRef.current) return;
    setValue(initialValue);
    setError(null);
  }, [initialValue]);

  const setLoadingState = useCallback((v) => {
    if (mountedRef.current) setLoading(Boolean(v));
  }, []);

  const setErrorState = useCallback((e) => {
    if (mountedRef.current) setError(e);
  }, []);

  const memoized = useMemo(() => ({
    value,
    setValue: update,
    reset,
    error,
    setError: setErrorState,
    loading,
    setLoading: setLoadingState,
  }), [value, update, reset, error, setErrorState, loading, setLoadingState]);

  return memoized;
}

export default useFilter;
