import { useEffect, useState } from "react";

export const isFalse = (value: any) => {
  if (value === 0) {
    return false;
  } else {
    return !value;
  }
};

export const clearObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key: string) => {
    // @ts-ignore
    if (isFalse(result[key])) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);
  return debounceValue;
};
