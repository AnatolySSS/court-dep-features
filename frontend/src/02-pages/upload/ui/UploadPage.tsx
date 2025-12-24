import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import type { FileUploadSelectEvent } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import type { AppDispatch } from "@/01-app";
import { uploadAndProcessExcel } from "@/05-entities";
import { FileUploadView } from "@/06-shared";
import styles from "./UploadPage.module.css";

export function UploadPage() {
  const dispatch = useDispatch<AppDispatch>();
  const toast = useRef<Toast>(null);
  const [totalSize, setTotalSize] = useState(0);
  const [loading, setLoading] = useState(false);

  const onSelect = (e: FileUploadSelectEvent) => {
    let _totalSize = totalSize;
    const files = e.files;

    for (let i = 0; i < files.length; i++) {
      _totalSize += files[i].size || 0;
    }
    setTotalSize(_totalSize);
  };

  const onUpload = async (e: FileUploadSelectEvent) => {
    console.log("uoload");

    setLoading(true);

    try {
      const file = e.files[0];

      await dispatch(uploadAndProcessExcel(file)).unwrap();
      toast.current?.show({ severity: "success", summary: "Success", detail: "Данные обработаны" });
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

  const onClear = () => {
    setTotalSize(0);
  };

  const onRemove = (file: File, callback: Function) => {
    setTotalSize(totalSize - file.size);
    callback();
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
        <FileUploadView
          totalSize={totalSize}
          onSelect={onSelect}
          onUpload={onUpload}
          onClear={onClear}
          onRemove={onRemove}
        />
      </>
    </div>
  );
}
