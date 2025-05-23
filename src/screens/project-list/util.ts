import { useMemo, useState } from "react";
import { useUrlQueryParam } from "utils/url";
// 项目列表搜索的参数
export const useProjectsSearchParams = () => {
  // 基本类型 组件状态 可以放在依赖里，非组件状态的对象 绝对不能放在依赖里
  const [keys] = useState<("name" | "personId")[]>(["name", "personId"]);
  const [param, setParam] = useUrlQueryParam(keys);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param],
    ),
    setParam,
  ] as const;
};
