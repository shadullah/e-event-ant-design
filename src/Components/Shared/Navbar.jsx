import { Drawer, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "../../App.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Events from "../Pages/Events";
import AddEvents from "../Pages/AddEvents";
import EventDetails from "../Pages/EventDetails";

const Navbar = () => {
  const [openMenu, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div
        style={{ height: 60, paddingLeft: "12px", paddingTop: "12px" }}
        className="menuIcon"
      >
        <MenuOutlined
          onClick={() => {
            setOpen(true);
          }}
        />
        <span className="title">E-Event</span>
      </div>
      <span className="header">
        <AppMenu setOpen={setOpen} />
      </span>
      <Drawer
        placement="left"
        open={openMenu}
        closable={false}
        onClose={() => setOpen(false)}
      >
        <AppMenu setOpen={setOpen} isInline />
      </Drawer>
      <Content />
    </div>
  );
};

function AppMenu({ isInline = false, setOpen }) {
  const items = [
    {
      label: "Local Event Planner",
      key: "e-event",
      link: "/",
    },
    {
      label: "Home",
      key: "/",
      link: "/",
    },
    {
      label: "Events",
      key: "/events",
      link: "/events",
    },
    {
      label: "Create Event",
      key: "/create-event",
      link: "/create-event",
    },
  ];

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
    >
      {items.map((item) => (
        <Menu.Item key={item.key} onClick={() => setOpen(false)}>
          <Link to={item.link}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/create-event" element={<AddEvents />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default Navbar;
