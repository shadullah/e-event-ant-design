import { Drawer, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "../../App.css";

const Navbar = () => {
  const [openMenu, setOpen] = useState(false);
  return (
    <div>
      <div
        style={{ height: 60, paddingLeft: "12px", paddingTop: "12px" }}
        className="menuIcon"
      >
        <MenuOutlined
          onClick={() => {
            setOpen(true);
          }}
        />
      </div>
      <span className="header">
        <AppMenu />
      </span>
      <Drawer
        placement="left"
        open={openMenu}
        closable={false}
        onClose={() => setOpen(false)}
      >
        <AppMenu isInline />
      </Drawer>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function AppMenu({ isInline = false }) {
  return (
    <Menu
      style={{
        fontSize: "18px",
        paddingTop: "12px",
        paddingBottom: "12px",
        color: "white",
        backgroundColor: "#4572AB",
      }}
      theme="dark"
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: "Home",
          key: "home",
        },
        {
          label: "Events",
          key: "events",
        },
        {
          label: "Create Event",
          key: "create-event",
        },
      ]}
    ></Menu>
  );
}

export default Navbar;
