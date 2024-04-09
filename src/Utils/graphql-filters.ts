import { FilterType } from "@/types/filter-types"
import { getStatusType } from "./get-status-type"




export const mountQuery = (type: FilterType) => {
    if(type === FilterType.ALL) return `query {
      consultarTodos {
        name
        idCar
        status
        idPhoto
        base64
      }
    }`
    return `query {
      consultarTodos (where: {status:{ eq: "${getStatusType(type)}"}} ) {
        name
        idCar
        status
        idPhoto
        base64
      }
    }`
  }