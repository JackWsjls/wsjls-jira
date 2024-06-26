import { User } from "screens/project-list/search-panel";
import { useHttp } from "./http";
import { useAsync } from "./use-async";
import { useEffect } from "react";
import { clearObject } from "utils";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: clearObject(param || {}) }));
  }, [param]); // eslint-disable-line

  return result;
};
