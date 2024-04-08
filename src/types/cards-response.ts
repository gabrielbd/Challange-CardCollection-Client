import { Cards } from "./cards"

export interface CardsFetchResponse{
    data: {
        consultarTodos: Cards[]
    }
}