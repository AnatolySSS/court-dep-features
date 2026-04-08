import { useRef, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { NavLink } from "react-router-dom";
import { Divider } from "primereact/divider";

import styles from "./SidebarView.module.css";

type Props = {
  visible: boolean;
  onHide: () => void;
};

export const SidebarView = ({ visible, onHide }: Props) => {
  const btnRef1 = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Sidebar
        visible={visible}
        onHide={onHide}
        content={() => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
              style={{ width: "320px" }}
            >
              <div className="flex flex-column h-full">
                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                  <span className="inline-flex align-items-center gap-2">
                    <span className="font-semibold text-2xl text-primary">СПУ АНО "СОДФУ"</span>
                  </span>
                </div>
                <div className="overflow-y-auto">
                  <ul className="list-none p-3 m-0">
                    <li>
                      <div
                        className={`p-ripple flex align-items-center cursor-pointer p-3 text-700 w-full ${styles.menuItem}`}
                      >
                        <NavLink
                          to={`/upload`}
                          className={"w-full p-link flex align-items-center"}
                          style={{
                            textDecoration: "none",
                            color: "#495057",
                          }}
                        >
                          <i className="pi pi-upload mr-2"></i>
                          <span className="font-medium">Загрузка</span>
                        </NavLink>
                        <Ripple />
                      </div>
                    </li>
                    <Divider />
                    <li>
                      {/* КНОПКА */}
                      <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={`p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer ${styles.menuItem}`}
                      >
                        <span className="font-medium">Статистика</span>
                        <i className={`pi pi-chevron-down ${styles.icon} ${isOpen ? styles.rotate : ""}`} />
                        <Ripple />
                      </div>

                      {/* СПИСОК */}
                      <ul className={`list-none p-0 m-0 overflow-hidden ${isOpen ? styles.slideDown : styles.slideUp}`}>
                        <li>
                          <div
                            className={`ml-3 p-ripple flex align-items-center cursor-pointer p-3 w-full ${styles.menuItem}`}
                          >
                            <NavLink
                              to={`/percentage`}
                              className={"w-full p-link flex align-items-center"}
                              style={{
                                textDecoration: "none",
                                color: "#495057",
                              }}
                            >
                              <i className="pi pi-percentage mr-2"></i>
                              <span className="font-medium">Процент выполнения</span>
                            </NavLink>
                            <Ripple />
                          </div>
                        </li>
                        <li>
                          <div
                            className={`ml-3 p-ripple flex align-items-center cursor-pointer p-3 w-full ${styles.menuItem}`}
                          >
                            <NavLink
                              to={`/doneByPeriod`}
                              className={"w-full p-link flex align-items-center"}
                              style={{
                                textDecoration: "none",
                                color: "#495057",
                              }}
                            >
                              <i className="pi pi-chart-bar mr-2"></i>
                              <span className="font-medium">Выполнено за период</span>
                            </NavLink>
                            <Ripple />
                          </div>
                        </li>
                        <li>
                          <div
                            className={`ml-3 p-ripple flex align-items-center cursor-pointer p-3 w-full ${styles.menuItem}`}
                          >
                            <NavLink
                              to={`/inWork`}
                              className={"w-full p-link flex align-items-center"}
                              style={{
                                textDecoration: "none",
                                color: "#495057",
                              }}
                            >
                              <i className="pi pi-hourglass mr-2"></i>
                              <span className="font-medium">Осталось в работе</span>
                            </NavLink>
                            <Ripple />
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </div>
  );
};
