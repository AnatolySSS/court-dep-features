import { Menubar } from "primereact/menubar";
// import { InputText } from "primereact/inputtext";
// import type { MenuItem } from "primereact/menuitem";
// import { Badge } from "primereact/badge";
// import { Avatar } from "primereact/avatar";

type Props = {
  onToggleSidebar: () => void;
};

export const MenubarView = ({ onToggleSidebar }: Props) => {
  // const itemRenderer = (item: any) => (
  //   <a className="flex align-items-center p-menuitem-link">
  //     <span className={item.icon} />
  //     <span className="mx-2">{item.label}</span>
  //     {item.badge && <Badge className="ml-auto" value={item.badge} />}
  //     {item.shortcut && (
  //       <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>
  //     )}
  //   </a>
  // );
  // const items: MenuItem[] = [
  //   {
  //     label: "Home",
  //     icon: "pi pi-home",
  //   } as MenuItem,
  //   {
  //     label: "Features",
  //     icon: "pi pi-star",
  //   } as MenuItem,
  //   {
  //     label: "Projects",
  //     icon: "pi pi-search",
  //     items: [
  //       {
  //         label: "Core",
  //         icon: "pi pi-bolt",
  //         shortcut: "⌘+S",
  //         template: itemRenderer,
  //       } as MenuItem,
  //       {
  //         label: "Blocks",
  //         icon: "pi pi-server",
  //         shortcut: "⌘+B",
  //         template: itemRenderer,
  //       } as MenuItem,
  //       {
  //         label: "UI Kit",
  //         icon: "pi pi-pencil",
  //         shortcut: "⌘+U",
  //         template: itemRenderer,
  //       } as MenuItem,
  //       {
  //         separator: true,
  //       } as MenuItem,
  //       {
  //         label: "Templates",
  //         icon: "pi pi-palette",
  //         items: [
  //           {
  //             label: "Apollo",
  //             icon: "pi pi-palette",
  //             badge: 2,
  //             template: itemRenderer,
  //           } as MenuItem,
  //           {
  //             label: "Ultima",
  //             icon: "pi pi-palette",
  //             badge: 3,
  //             template: itemRenderer,
  //           } as MenuItem,
  //         ],
  //       } as MenuItem,
  //     ],
  //   },
  //   {
  //     label: "Contact",
  //     icon: "pi pi-envelope",
  //     badge: 3,
  //     template: itemRenderer,
  //   } as MenuItem,
  // ];

  const start = (
    <div className="flex align-items-center gap-2">
      <button className="p-button p-component" onClick={onToggleSidebar}>
        <i className="pi pi-bars"></i>
      </button>
    </div>
  );

  const end = (
    <div className="flex align-items-center gap-2">
      {/* <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" /> */}
      {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
    </div>
  );

  return (
    <div className="card">
      {/* <Menubar model={items} start={start} end={end} /> */}
      <Menubar start={start} end={end} />
    </div>
  );
};
