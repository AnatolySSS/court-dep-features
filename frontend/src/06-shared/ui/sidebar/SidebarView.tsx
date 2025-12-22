import { useRef } from "react";
import { Sidebar } from "primereact/sidebar";
// import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { NavLink } from "react-router-dom";

type Props = {
  visible: boolean;
  onHide: () => void;
};

export const SidebarView = ({ visible, onHide }: Props) => {
  const btnRef1 = useRef<any>(null);

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
                    <span className="font-semibold text-2xl text-primary">Court dep features</span>
                  </span>
                </div>
                <div className="overflow-y-auto">
                  <ul className="list-none p-3 m-0">
                    <li>
                      <StyleClass
                        nodeRef={btnRef1}
                        selector="@next"
                        enterFromClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef1}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">MENU</span>
                          <i className="pi pi-chevron-down"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <NavLink
                              to={`/upload`}
                              className={"w-full p-link flex align-items-center"}
                              style={{
                                textDecoration: "none",
                                color: "#495057",
                              }}
                            >
                              <i className="pi pi-upload mr-2"></i>
                              <span className="font-medium">Upload</span>
                            </NavLink>
                            <Ripple />
                          </div>
                        </li>
                        <li>
                          <div className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <NavLink
                              to={`/stats`}
                              className={"w-full p-link flex align-items-center"}
                              style={{
                                textDecoration: "none",
                                color: "#495057",
                              }}
                            >
                              <i className="pi pi-chart-bar mr-2"></i>
                              <span className="font-medium">Stats</span>
                            </NavLink>
                            <Ripple />
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* <div className="mt-auto">
                  <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                  <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                    <span className="font-bold">Amy Elsner</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </div>
  );
};
