import React, { useEffect, useState } from "react";

export const useTimeout = <S>(
  initial: S,
  fallback: S,
  timeoutMs: number
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initial);

  useEffect(() => {
    const timer = setTimeout(() => setState(fallback), timeoutMs);
    return () => clearTimeout(timer);
  }, [state, fallback, timeoutMs]);

  return [state, setState];
};
