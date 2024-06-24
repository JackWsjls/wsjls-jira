import { useEffect, useState } from "react";

export const isFalse = (value: unknown) => {
  if (value === 0) {
    return false;
  } else {
    return !value;
  }
};

const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const clearObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key: string) => {
    if (isVoid(result[key])) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []); // eslint-disable-line
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, []); // eslint-disable-line
  return debounceValue;
};
