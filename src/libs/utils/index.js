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
