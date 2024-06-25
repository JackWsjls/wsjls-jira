import { useEffect } from "react";
import { useAsync } from "./use-async";
import { Project } from "screens/project-list/list";
import { clearObject } from "libs/utils";
import { useHttp } from "utils/http";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: clearObject(param || {}) }));
    // setIsLoading(true)
    // client("projects", { data: clearObject(debounceParam) }).then(setList)
    //   .catch(error => {
    //     setList([])
    //     setError(error)
    //   })
    //   .finally(() => setIsLoading(false));
  }, [param]); // eslint-disable-line

  return result;
};
