import { Button } from "primereact/button";
import { downloadTotalTypesExcel } from "@/04-features/download/lib";

export const DownloadButton = (totalTypes: any) => {
  return (
    <Button icon="pi pi-file-excel" rounded outlined onClick={() => downloadTotalTypesExcel(totalTypes.totalTypes)} />
  );
};
