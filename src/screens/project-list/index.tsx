import React from "react";
// import { useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useDebounce, useDocumentTitle } from "utils";
import styled from "@emotion/styled";
import { Typography, Button, Row } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
// import { Test } from "test";
// import { useUrlQueryParam } from "utils/url";
import { useProjectsSearchParams } from "./util";
// import {Helmet} from "react-helmet"

export const ProjectListScreen = (props: {
  setProjectModalOpen: (isOpen: boolean) => void;
}) => {
  useDocumentTitle("项目列表", false);
  // const [users, setUsers] = useState([]);
  // const [, setParam] = useState({
  //   name: "",
  //   personId: "",
  // });
  const [param, setParam] = useProjectsSearchParams();
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState<null | Error>(null)
  // const [list, setList] = useState([]);
  // const client = useHttp();
  const {
    isLoading,
    error,
    data: list,
    retry,
  } = useProjects(useDebounce(param, 200));
  const { data: users } = useUsers();
  // useMount(() => {
  //   client("users").then(setUsers);
  // });
  return (
    <Container>
      {/* <Test></Test> */}
      {/* <Helmet>
        <title>项目列表</title>
      </Helmet> */}
      <Row justify="space-between">
        <h1>项目列表</h1>
        <Button
          onClick={() => {
            props.setProjectModalOpen(true);
          }}
        >
          创建项目
        </Button>
      </Row>
      <Button onClick={retry}>retry</Button>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        setProjectModalOpen={props.setProjectModalOpen}
        refresh={retry}
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;
