import { useDispatch, useSelector } from "react-redux";
import type { FileUploadSelectEvent } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

import { uploadAndProcessExcel } from "@/entities/upload/model/thunks";
import { selectUploadTotalSize } from "@/entities/upload/model/selectors";
import type { AppDispatch } from "@/app/store";

import { FileUploadView } from "@/shared/ui/file-upload/FileUploadView";
import styles from "./UploadComponent.module.css";

export function UploadComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const toast = useRef<Toast>(null);
  const totalSize = useSelector(selectUploadTotalSize);

  const [loading, setLoading] = useState(false); // состояние лоадера

  const onSelect = async (e: FileUploadSelectEvent) => {
    setLoading(true); // включаем лоадер

    try {
      const file = e.files[0];
      await dispatch(uploadAndProcessExcel(file));
    } catch (error) {
      // dispatch(setError("Ошибка обработки файла"));
      console.log(error);
      toast.current?.show({
        severity: "error",
        summary: "Ошибка",
        detail: "Не удалось прочитать Excel",
      });
    } finally {
      setLoading(false); // выключаем лоадер
    }
  };

  return (
    <div className={styles.wrapper}>
      <Toast ref={toast} />

      {loading && (
        <div className={styles.spinnerOverlay}>
          <div className={styles.processingMessage}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <span>Обработка файла...</span>
          </div>
        </div>
      )}

      <FileUploadView totalSize={totalSize} onSelect={onSelect} />
    </div>
  );
}
