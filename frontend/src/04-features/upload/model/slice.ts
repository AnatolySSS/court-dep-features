import { createSlice } from "@reduxjs/toolkit";
import type { UploadState } from "./types";

const initialState: UploadState = {
  totalSize: 0,
  data: null,
  modifiedData: null,
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
    },
    setDateRange(state, action) {
      state.dateRange = action.payload;
    },
    setModifiedData(state, action) {
      state.modifiedData = action.payload;
    },
  },
});

export const { clear, setDateRange, setModifiedData } = uploadSlice.actions;

export const uploadReducer = uploadSlice.reducer;
