import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import type { FileUploadSelectEvent } from "primereact/fileupload";
import { Toast } from "primereact/toast";

import { FileUploadView } from "@/shared/ui/file-upload/FileUploadView";
import { InstanceTabs } from "@/widgets/instance-responsibles/ui/InstanceTabs";

import { uploadAndProcessExcel } from "@/entities/upload/model/thunks";
import { selectUploadTotalSize } from "@/entities/upload/model/selectors";
import type { AppDispatch, RootState } from "@/app/store";

import styles from "./UploadPage.module.css";
import { Button } from "primereact/button";

export function UploadPage() {
  const dispatch = useDispatch<AppDispatch>();
  const toast = useRef<Toast>(null);

  const totalSize = useSelector(selectUploadTotalSize);
  const instances = useSelector((state: RootState) => state.upload.modifiedData);

  const [loading, setLoading] = useState(false);

  const isReady = Boolean(instances?.firstInstance);

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

      {!isReady && (
        <>
          <h1>Загрузка Excel</h1>
          <FileUploadView totalSize={totalSize} onSelect={onSelect} />
        </>
      )}
      {isReady && (
        <>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <h1>Аналитика по сотрудникам</h1>
            <Button icon="pi pi-refresh" outlined onClick={() => window.location.reload()} rounded />
          </div>
          <div className={styles.result}>
            <InstanceTabs
              data={{
                first: instances.firstInstance,
                appeal: instances.appealInstance,
                cass: instances.cassInstance,
                cass2: instances.cass2Instance,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
