export type UploadState = {
  instances: { firstInstance: string; appealInstance: string; cassInstance: string; cass2Instance: string };
  totalSize: number;
  data: any[] | null;
  modifiedData: any | null;
  error: string | null;
};

export type Responsible = {
  percent: number;
  name: string;
  assigned: number;
  completed: number;
};

export type AggregateConfig = {
  instanceKey: string;
  nameField: string;
  dateField: string;
};
