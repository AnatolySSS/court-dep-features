import { Menubar } from "primereact/menubar";
import { DownloadButton } from "@/04-features";
import { selectUploadModifiedData } from "@/04-features";
import { CalendarComponent } from "./components/CalendarComponent";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "@/01-app/store/hooks";
import type { ModifiedDataType } from "@/04-features/upload/model/types";

type Props = {
  onToggleSidebar: () => void;
};

export const MenubarView = ({ onToggleSidebar }: Props) => {
  const totalModifiedTypes = useAppSelector(selectUploadModifiedData);
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];
  const modifiedData: ModifiedDataType | null =
    totalModifiedTypes?.[currentPage as keyof typeof totalModifiedTypes] ?? null;

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
      <DownloadButton modifiedData={modifiedData} currentPage={currentPage} />
    </div>
  );

  return (
    <div className="card">
      <Menubar start={start} end={end} />
    </div>
  );
};
