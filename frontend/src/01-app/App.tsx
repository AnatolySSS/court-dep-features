import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarView, MenubarView } from "@/06-shared";
import "./App.css";

export const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="App">
      <SidebarView visible={sidebarVisible} onHide={() => setSidebarVisible(false)} />
      <MenubarView onToggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
      <Outlet /> {/* Здесь будут рендериться дочерние страницы */}
    </div>
  );
};
