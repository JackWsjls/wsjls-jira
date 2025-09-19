import { Button, Drawer } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  projectListActions,
  selectProjectModalOpen,
} from "./project-list.slice";
import { useSelector } from "react-redux";

// props: {
//   projectModalOpen: boolean;
//   onClose: () => void;
// }
export const ProjectModal = () => {
  const dispatch = useDispatch();
  const projectModalOpen = useSelector(selectProjectModalOpen);
  return (
    <Drawer
      onClose={() => dispatch(projectListActions.closeProjectModal())}
      open={projectModalOpen}
      width={"100%"}
    >
      <h1>Project Modal</h1>
      <Button onClick={() => dispatch(projectListActions.closeProjectModal())}>
        关闭
      </Button>
    </Drawer>
  );
};
