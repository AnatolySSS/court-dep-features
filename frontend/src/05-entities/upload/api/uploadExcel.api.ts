import { instance } from "@/06-shared";

export const uploadExcelApi = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const { data } = await instance.post("/court-cases/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(data);

  return data;
};
