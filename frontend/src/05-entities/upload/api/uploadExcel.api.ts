import { instance } from "@/06-shared";
import type { UploadExcelApiProps } from "@/05-entities";

export const uploadExcelApi = async ({ file, dateRange }: UploadExcelApiProps) => {
  const formData = new FormData();

  formData.append("file", file);

  if (dateRange?.startDate) {
    formData.append("startDate", toDateString(dateRange.startDate));
  }

  if (dateRange?.endDate) {
    formData.append("endDate", toDateString(dateRange.endDate));
  }

  const { data } = await instance.post("/court-cases/upload", formData);

  (window as any).courtData = data;

  return data.finalData;
};

function toDateString(date: Date | null): string {
  if (!date) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
