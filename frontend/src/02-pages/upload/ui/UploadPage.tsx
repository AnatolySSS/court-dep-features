import { useRef, useState } from "react";
import type { FileUploadSelectEvent } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import styles from "./UploadPage.module.css";
import { useNavigate } from "react-router-dom";
import { FileUploadView } from "@/03-widgets";
import { useUploadMutation } from "@/04-features/upload/api/upload.api";
import { selectUploadDateRange } from "@/04-features/upload/model/selectors";
import { setModifiedData } from "@/04-features/upload/model/slice";
import { useAppDispatch, useAppSelector } from "@/01-app/store/hooks";

export function UploadPage() {
  const dispatch = useAppDispatch();
  const [upload] = useUploadMutation();
  const dateArr = useAppSelector(selectUploadDateRange);

  const toast = useRef<Toast>(null);
  const [totalSize, setTotalSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSelect = (e: FileUploadSelectEvent) => {
    let _totalSize = totalSize;
    const files = e.files;

    for (let i = 0; i < files.length; i++) {
      _totalSize += files[i].size || 0;
    }
    setTotalSize(_totalSize);
  };

  const onUpload = async (e: FileUploadSelectEvent) => {
    setLoading(true);

    try {
      const file = e.files[0];

      const dateRange = {
        startDate: dateArr ? dateArr[0] : null,
        endDate: dateArr ? dateArr[1] : null,
      };

      const result = await upload({ file, dateRange }).unwrap();
      dispatch(setModifiedData(result.finalData));

      navigate("/percentage");
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
