import styled from "@emotion/styled";
import { ButtonNoPadding, Row } from "components/lib";
import { useAuth } from "context/auth-context";
import React from "react";
import { ProjectListScreen } from "screens/project-list";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "screens/project";
import { resetRoute } from "utils";
import { useState } from "react";
import { ProjectModal } from "screens/project-list/project-modal";
import { ProjectPopover } from "components/project-popover";

export const AuthenticatedApp = () => {
  // const value:any = undefined
  // const [projectModalOpen, setProjectModalOpen] = useState(false);
  return (
    <Container>
      {/* {value.notExist} */}

      {/* projectButton={
        <ButtonNoPadding
          onClick={() => setProjectModalOpen(true)}
          type={"link"}
        >
          创建项目
        </ButtonNoPadding>
      } */}
      <PageHeader />
      {/* 默认 */}
      {/* <PageHeader setProjectModalOpen={setProjectModalOpen} /> */}

      {/* <ButtonNoPadding style={{width: '50px'}} onClick={() => { setProjectModalOpen(true) }}>打开</ButtonNoPadding> */}
      <Main>
        <Router>
          <Routes>
            <Route
              path={"/projects"}
              element={
                <ProjectListScreen />
                // setProjectModalOpen={setProjectModalOpen}
              }
            ></Route>
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            ></Route>
            <Route
              path="*"
              element={<Navigate to="/projects" replace={true} />}
            />
          </Routes>
        </Router>
      </Main>
      <ProjectModal />
    </Container>
  );
};

// props: {
//   projectButton: JSX.Element;
//   // setProjectModalOpen: (isOpen: boolean) => void;
// }
const PageHeader = () => {
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <ButtonNoPadding
          style={{ padding: 0 }}
          type={"link"}
          onClick={resetRoute}
        >
          <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
        </ButtonNoPadding>
        <ProjectPopover />
        {/* <ProjectPopover {...props} /> */}
        {/* <ProjectPopover setProjectModalOpen={props.setProjectModalOpen} /> */}
        {/* <h2>项目</h2> */}
        <span>用户</span>
      </HeaderLeft>
      <HeaderRight>
        <User />
      </HeaderRight>
    </Header>
  );
};

const User = () => {
  const { logout, user } = useAuth();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button type={"link"} onClick={logout}>
          登出
        </Button>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <Button type={"link"}>
        <Space>Hi, {user?.name}</Space>
      </Button>
    </Dropdown>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.main`
  /* display: flex;
  overflow: hidden; */
`;
