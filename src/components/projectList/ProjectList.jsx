import { useState } from "react";
import { Avatar, List, Radio, Space } from "antd";
import Project from "../project/Project";
import "./projectList.css";
import { projects } from "./project-data";

const ProjectList = () => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState([]);
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
      </div>
      <div className="pl-container">
        <List
          pagination={{
            position: "bottom",
            align: "center",
            pageSize: 3,
          }}
          style={{width:'100%'}}
          dataSource={projects}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                setOpen(true);
                setItem(item);
              }}
              className="pl-list-item"
            >
              <List.Item.Meta
                className="pl-list-item-meta"
                avatar={item.avatar}
                title={item.title}
                
              />
            </List.Item>
          )}
        />
      </div>
      <Project open={open} setOpen={setOpen} item={item} />
    </div>
  );
};

export default ProjectList;
