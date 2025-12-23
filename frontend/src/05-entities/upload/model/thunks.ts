// model/thunks.ts  <-- новое место
import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadExcelApi } from "@/05-entities";
// import { modifyData } from "@/05-entities";

export const uploadAndProcessExcel = createAsyncThunk(
  "upload/uploadAndProcessExcel",
  async (file: File, { rejectWithValue }) => {
    try {
      const modifiedData = await uploadExcelApi(file);

      return { modifiedData, totalSize: file.size };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data ?? "Upload failed");
    }
  }
);
