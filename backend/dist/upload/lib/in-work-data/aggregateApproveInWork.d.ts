export type Responsible = {
    name: string;
    inWork: number;
};
export type DateRange = {
    startDate: Date | null;
    endDate: Date | null;
};
export type AggregateConfig = {
    instanceKey: string;
    nameField: string;
    dateAssigned: string;
    dateCompleted: string;
};
export declare function aggregateApproveInWork(data: any[], { instanceKey, nameField, dateAssigned, dateCompleted }: AggregateConfig): Responsible[];
