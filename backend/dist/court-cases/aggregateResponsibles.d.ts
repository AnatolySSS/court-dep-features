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
export declare function aggregateResponsibles(data: any[], { instanceKey, nameField, dateField }: AggregateConfig): Responsible[];
