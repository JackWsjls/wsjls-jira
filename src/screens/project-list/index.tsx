import React from "react";
import { useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useDebounce, useDocumentTitle } from "utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
// import { Test } from "test";
import { useUrlQueryParam } from "utils/url";
// import {Helmet} from "react-helmet"

export const ProjectListScreen = () => {
  // const [users, setUsers] = useState([]);
  const [, setParam] = useState({
    name: "",
    personId: "",
  });
  // 基本类型 组件状态 可以放在依赖里，非组件状态的对象 绝对不能放在依赖里
  const [keys] = useState<("name" | "personId")[]>(["name", "personId"]);
  const [param] = useUrlQueryParam(keys);
  const debounceParam = useDebounce(param, 1000);
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState<null | Error>(null)
  // const [list, setList] = useState([]);
  // const client = useHttp();
  const { isLoading, error, data: list } = useProjects(debounceParam);
  const { data: users } = useUsers();
  // useMount(() => {
  //   client("users").then(setUsers);
  // });
  useDocumentTitle("项目列表", false);
  return (
    <Container>
      {/* <Test></Test> */}
      {/* <Helmet>
        <title>项目列表</title>
      </Helmet> */}
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;
