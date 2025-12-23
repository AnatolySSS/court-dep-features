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
    dateField: string;
    dateRange?: DateRange;
};
export declare function aggregateResponsibles(data: any[], { instanceKey, nameField, dateField, dateRange }: AggregateConfig): Responsible[];
