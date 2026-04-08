import type { RootState } from "@/01-app";

export const selectUploadModifiedData = (state: RootState) => state.upload.modifiedData;
export const selectUploadDateRange = (state: RootState) => state.upload.dateRange;
