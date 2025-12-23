import { createSlice } from "@reduxjs/toolkit";
import type { UploadState } from "./types";
import { uploadAndProcessExcel } from "./thunks";

const initialState: UploadState = {
  totalSize: 0,
  data: null,
  modifiedData: null,
  error: null,
  dateRange: null,
  instances: {
    firstInstance: "Первая инстанция",
    appealInstance: "Апелляционная инстанция",
    cassInstance: "Кассационная инстанция",
    cass2Instance: "Кассационная инстанция 2",
  },
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    clear(state) {
      state.totalSize = 0;
      state.data = null;
      state.dateRange = null;
      state.modifiedData = null;
      state.error = null;
    },
    setDateRange(state, action) {
      state.dateRange = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadAndProcessExcel.fulfilled, (state, action) => {
      state.modifiedData = action.payload.modifiedData;
      state.totalSize = action.payload.totalSize;
      state.error = null;
    });
    builder.addCase(uploadAndProcessExcel.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export const { clear, setDateRange } = uploadSlice.actions;

export const uploadReducer = uploadSlice.reducer;
