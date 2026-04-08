import { Menubar } from "primereact/menubar";
import { DownloadButton } from "@/04-features";
import { selectUploadModifiedData } from "@/04-features";
import { CalendarComponent } from "./components/CalendarComponent";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "@/01-app/store/hooks";

type Props = {
  onToggleSidebar: () => void;
};

export const MenubarView = ({ onToggleSidebar }: Props) => {
  const totalTypes = useAppSelector(selectUploadModifiedData);
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];
  const currentTotal = totalTypes?.[currentPage as keyof typeof totalTypes] ?? null;

  const start = (
    <div className="flex align-items-center gap-2">
      <button className="p-button p-component" onClick={onToggleSidebar}>
        <i className="pi pi-bars"></i>
      </button>
    </div>
  );

  const end = (
    <div className="flex align-items-center gap-5">
      <CalendarComponent />
      <DownloadButton totalTypes={currentTotal} />
    </div>
  );

  return (
    <div className="card">
      <Menubar start={start} end={end} />
    </div>
  );
};
