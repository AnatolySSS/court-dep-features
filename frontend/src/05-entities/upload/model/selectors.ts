import type { RootState } from "@/01-app";

export const selectUploadData = (state: RootState) => state.upload.data;
export const selectUploadTotalSize = (state: RootState) => state.upload.totalSize;
export const selectUploadError = (state: RootState) => state.upload.error;
export const selectUploadModifiedData = (state: RootState) => state.upload.modifiedData;
export const selectUploadInstances = (state: RootState) => state.upload.instances;
export const selectUploadDateRange = (state: RootState) => state.upload.dateRange;
