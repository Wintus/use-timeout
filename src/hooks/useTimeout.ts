import React, { useEffect, useState } from "react";

export const useTimeout = <S>(
  initial: S,
  fallback: S,
  timeout: number
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initial);

  useEffect(() => {
    const timer = setTimeout(() => setState(fallback), timeout);
    return () => clearTimeout(timer);
  }, [state, fallback, timeout]);

  return [state, setState];
};
