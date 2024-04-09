import { FilterType } from "@/types/filter-types";

export function getStatusType(type : FilterType){
    if(type == FilterType.ACTIVATED) return "1"
    if(type == FilterType.DISABLED) return "2"
}