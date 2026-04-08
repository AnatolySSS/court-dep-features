export type Responsible = {
    percent: number;
    name: string;
    assigned: number;
    completed: number;
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
    dateRange?: DateRange;
};
export declare function aggregatePercentage(data: any[], { instanceKey, nameField, dateAssigned, dateCompleted, dateRange, }: AggregateConfig): Responsible[];
