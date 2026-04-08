export type UploadState = {
  instances: { firstInstance: string; appealInstance: string; cassInstance: string; cass2Instance: string };
  totalSize: number;
  data: any[] | null;
  dateRange: Date[] | null;
  modifiedData: {
    percentage: ModifiedDataType;
    doneByPeriod: ModifiedDataType;
    inWork: ModifiedDataType;
  } | null;
};

export type ModifiedDataType = {
  firstInstance: InstanceType;
  appealInstance: InstanceType;
  cassInstance: InstanceType;
  cass2Instance: InstanceType;
  allInstances: InstanceType;
};

export type InstanceType = {
  typeResponsibles: Responsible[] | null;
  objectionResponsibles: Responsible[] | null;
  approveResponsibles: Responsible[] | null;
  allTypeResponsibles: Responsible[] | null;
};

export type Responsible = {
  name: string;
  percent?: number;
  assigned?: number;
  completed?: number;
  inWork?: number;
};

export type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};
