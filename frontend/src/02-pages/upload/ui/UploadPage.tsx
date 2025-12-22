import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import type { FileUploadSelectEvent } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import type { AppDispatch } from "@/01-app";
import { uploadAndProcessExcel } from "@/05-entities";
import { selectUploadTotalSize } from "@/05-entities";
import { FileUploadView } from "@/06-shared";
import styles from "./UploadPage.module.css";

export function UploadPage() {
  const dispatch = useDispatch<AppDispatch>();
  const toast = useRef<Toast>(null);

  const totalSize = useSelector(selectUploadTotalSize);

  const [loading, setLoading] = useState(false);

  const onSelect = async (e: FileUploadSelectEvent) => {
    setLoading(true);

    try {
      const file = e.files[0];
      await dispatch(uploadAndProcessExcel(file)).unwrap();
    } catch (error) {
      console.error(error);
      toast.current?.show({
        severity: "error",
        summary: "Ошибка",
        detail: "Не удалось обработать Excel",
      });
    } finally {
      setLoading(false);
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

      <>
        <h1>Загрузка Excel</h1>
        <FileUploadView totalSize={totalSize} onSelect={onSelect} />
      </>
    </div>
  );
}
