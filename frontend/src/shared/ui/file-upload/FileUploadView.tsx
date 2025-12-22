import { useRef } from "react";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Tooltip } from "primereact/tooltip";

type Props = {
  totalSize: number;
  onSelect: (e: any) => void;
};

export function FileUploadView({ totalSize, onSelect }: Props) {
  const fileUploadRef = useRef<FileUpload>(null);

  const headerTemplate = (options: any) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 1_000_000; // для progressBar
    const formattedValue = fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : "0 B";

    return (
      <div className={className} style={{ display: "flex", alignItems: "center" }}>
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>{formattedValue} / 1 MB</span>
          <ProgressBar value={value} showValue={false} style={{ width: "10rem", height: "12px" }} />
        </div>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className: "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className: "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  return (
    <>
      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

      <FileUpload
        ref={fileUploadRef}
        multiple
        accept=".xls,.xlsx"
        maxFileSize={1_000_000_000}
        onSelect={onSelect}
        headerTemplate={headerTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
    </>
  );
}
