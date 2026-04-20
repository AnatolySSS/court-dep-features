import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { MenubarView, SidebarView } from "@/03-widgets";
import { LocaleProvider } from "./providers/locale-provider";

export const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="App">
      <LocaleProvider />
      <SidebarView visible={sidebarVisible} onHide={() => setSidebarVisible(false)} />
      <MenubarView onToggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
      <Outlet /> {/* Здесь будут рендериться дочерние страницы */}
    </div>
  );
};
