import { Menubar } from "primereact/menubar";
import { DownloadButton } from "@/04-features";
import { selectUploadModifiedData } from "@/05-entities";
import { useSelector } from "react-redux";

type Props = {
  onToggleSidebar: () => void;
};

export const MenubarView = ({ onToggleSidebar }: Props) => {
  const totalTypes = useSelector(selectUploadModifiedData);

  const start = (
    <div className="flex align-items-center gap-2">
      <button className="p-button p-component" onClick={onToggleSidebar}>
        <i className="pi pi-bars"></i>
      </button>
    </div>
  );

  const end = (
    <div className="flex align-items-center gap-2">
      <DownloadButton totalTypes={totalTypes} />
    </div>
  );

  return (
    <div className="card">
      <Menubar start={start} end={end} />
    </div>
  );
};
