import React, { useState } from "react";
import { Button, Modal } from "antd";
const Project = ({ open, setOpen, item }) => {
  return (
    <>
      <Modal
        title={item.title}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        okButtonProps={{style:{visibility:"hidden"}}}
        cancelButtonProps={{style:{visibility:"hidden"}}}
        width={1000}
      >
        {item.description}
      </Modal>
    </>
  );
};
export default Project;
