import { useEffect, useState } from "react";

export const isFalse = (value) => {
  if (value === 0) {
    return false;
  } else {
    return !value;
  }
};

export const clearObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    if (isFalse(result[key])) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState("");
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
