import { useRef } from "react";
import { FileUpload, type ItemTemplateOptions } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import excelLogo from "./assets/excel-logo.png";

type Props = {
  totalSize: number;
  onSelect: (e: any) => void;
  onUpload: (e: any) => void;
  onClear: () => void;
  onRemove: (file: File, callback: Function) => void;
};

export function FileUploadView({ totalSize, onSelect, onUpload, onClear, onRemove }: Props) {
  const fileUploadRef = useRef<FileUpload>(null);

  const headerTemplate = (options: any) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = (totalSize / 20_000_000) * 100; // для progressBar
    const formattedValue = fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : "0 B";

    return (
      <div className={className} style={{ display: "flex", alignItems: "center" }}>
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>{formattedValue} / 20 MB</span>
          <ProgressBar value={value} showValue={false} style={{ width: "10rem", height: "12px" }} />
        </div>
      </div>
    );
  };

  const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
    const file = inFile as File;

    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center">
          <img alt={file.name} role="presentation" src={excelLogo} width={100} />
          <span className="flex flex-column text-left ml-3">{file.name}</span>
        </div>
        <div className="flex align-items-center ml-auto gap-2">
          <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
          <Button
            type="button"
            icon="pi pi-times"
            className="p-button-outlined p-button-rounded p-button-danger"
            onClick={() => onRemove(file, props.onRemove)}
          />
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
        maxFileSize={20_000_000}
        onSelect={onSelect}
        customUpload={true}
        uploadHandler={onUpload}
        onClear={onClear}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
    </>
  );
}
