// model/thunks.ts  <-- новое место
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUploadDateRange, uploadExcelApi } from "@/05-entities";
import type { RootState } from "@/01-app";

export const uploadAndProcessExcel = createAsyncThunk(
  "upload/uploadAndProcessExcel",
  async (file: File, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const dateArr = selectUploadDateRange(state);
      const dateRange = {
        startDate: dateArr ? dateArr[0] : null,
        endDate: dateArr ? dateArr[1] : null,
      };

      const modifiedData = await uploadExcelApi({ file, dateRange });

      return { modifiedData, totalSize: file.size };
    } catch (error: any) {
      return rejectWithValue(error?.response?.data ?? "Upload failed");
    }
  }
);
