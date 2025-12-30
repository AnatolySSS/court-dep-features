type Responsible = {
    name: string;
    assigned: number;
    completed: number;
    percent: number;
};
export declare const addAllTypes: (modifiedData: any) => any;
export declare function mergeResponsibles(typeResponsibles: Responsible[], objectionResponsibles: Responsible[], approveResponsibles: Responsible[]): Responsible[];
export {};
