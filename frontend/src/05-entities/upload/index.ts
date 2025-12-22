export type { UploadState, Responsible, AggregateConfig } from "./model";
export { uploadReducer, selectUploadTotalSize } from "./model";
export { clear, uploadAndProcessExcel } from "./model";
export { parseExcel, getObjectionsResponsibles, getTypeResponsibles, modifyData } from "./lib";
export { uploadExcelApi } from "./api";
