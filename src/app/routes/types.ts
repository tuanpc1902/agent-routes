import { ElementType } from "react";

export type TSubUserPermission = {
    [key: string]: boolean;
};
export type TFlagFeature = {
    [key: string]: boolean;
};
export type TRoute = {
    path: string;
    component: ElementType;
    permission: boolean;
    flag: boolean;
};
