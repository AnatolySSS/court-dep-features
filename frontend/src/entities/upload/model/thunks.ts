// model/thunks.ts  <-- новое место
import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseExcel } from "@/entities/upload/lib/parseExcel";
import { getTypeResponsibles } from "@/entities/upload/lib/getTypeResponsibles";
import { getObjectionsResponsibles } from "@/entities/upload/lib/getObjectionsResponsibles";

export const uploadAndProcessExcel = createAsyncThunk("upload/uploadAndProcessExcel", async (file: File, thunkAPI) => {
  try {
    const data = await parseExcel(file);

    // Обработка данных (пример для typedResponsibleFirstInstance)
    const modifiedData = {
      firstInstance: {
        typeResponsibles: getTypeResponsibles(data, "Первая инстанция"),
        objectionResponsibles: getObjectionsResponsibles(data, "Первая инстанция"),
      },
      appealInstance: {
        typeResponsibles: getTypeResponsibles(data, "Апелляционная инстанция"),
        objectionResponsibles: getObjectionsResponsibles(data, "Апелляционная инстанция"),
      },
      cassInstance: {
        typeResponsibles: getTypeResponsibles(data, "Кассационная инстанция"),
        objectionResponsibles: getObjectionsResponsibles(data, "Кассационная инстанция"),
      },
      cass2Instance: {
        typeResponsibles: getTypeResponsibles(data, "Кассационная инстанция 2"),
        objectionResponsibles: getObjectionsResponsibles(data, "Кассационная инстанция 2"),
      },
    };

    return { data, modifiedData, totalSize: file.size };
  } catch (error) {
    return thunkAPI.rejectWithValue(`Ошибка обработки файла: ${error}`);
  }
});
