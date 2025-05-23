import { useEffect } from "react";
import { useAsync } from "./use-async";
import { Project } from "screens/project-list/list";
import { clearObject } from "utils";
import { useHttp } from "utils/http";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  const fetchProjects = () =>
    client("projects", { data: clearObject(param || {}) });

  useEffect(() => {
    run(fetchProjects(), {
      retry: fetchProjects,
    });
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

export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, {
        data: params,
        method: "PATCH",
      }),
    );
  };
  return { mutate, ...asyncResult };
};

export const useAddProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, {
        data: params,
        method: "POST",
      }),
    );
  };
  return { mutate, ...asyncResult };
};
