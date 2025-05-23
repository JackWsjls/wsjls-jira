import { useMemo } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    useMemo(
      () =>
        keys.reduce(
          (prev, key) => {
            return { ...prev, [key]: searchParams.get(key) || "" };
          },
          {} as { [key in K]: string },
        ),
      [searchParams, keys], // eslint-disable-line
    ), // eslint-disable-line
    // keys 是一个state，放在依赖列表里就不会有问题
    // setSearchParams,
    (params: Partial<{ [key in K]: unknown }>) => {
      // iterator
      const o = {
        ...Object.fromEntries(searchParams),
        ...params,
      } as URLSearchParamsInit;
      return setSearchParams(o);
    },
  ] as const;
};
