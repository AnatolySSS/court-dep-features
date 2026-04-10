import { Button } from "primereact/button";
import { downloadTotalTypesExcel } from "@/04-features/download/lib";
import type { DateRange, ModifiedDataType } from "@/04-features/upload/model/types";
import { selectUploadDateRange } from "@/04-features";
import { useAppSelector } from "@/01-app/store/hooks";
import { Toast } from "primereact/toast";
import { useRef } from "react";

export const DownloadButton = ({
  modifiedData,
  currentPage,
}: {
  modifiedData: ModifiedDataType | null;
  currentPage: string;
}) => {
  const toast = useRef<Toast | null>(null);
  const dateArr = useAppSelector(selectUploadDateRange);
  const dateRange: DateRange | null = {
    startDate: dateArr ? dateArr[0] : null,
    endDate: dateArr ? dateArr[1] : null,
  };

  const handleOnClick = () => {
    if (!modifiedData) {
      toast.current?.show({ severity: "error", summary: "Ошибка", detail: "Нет данных для скачивания" });
      return;
    }

    if (currentPage === "percentage") {
      toast.current?.show({
        severity: "info",
        summary: "Информация",
        detail: "Для данного типа отчета скачивание недоступно",
      });
      return;
    }

    downloadTotalTypesExcel(modifiedData, currentPage, dateRange);
    toast.current?.show({
      severity: "success",
      summary: "Успех",
      detail: "Отчет успешно сгенерирован",
    });
  };

  return (
    <div>
      <Toast ref={toast} position="bottom-right" />
      <Button icon="pi pi-file-excel" rounded outlined onClick={handleOnClick} />
    </div>
  );
};
