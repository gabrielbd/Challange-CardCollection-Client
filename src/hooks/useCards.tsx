import { CardsFetchResponse } from "@/types/cards-response";
import axios, { Axios, AxiosPromise } from "axios";
import { useQuery } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<CardsFetchResponse> => {
    return axios.post(
    API_URL,
    {
       query:`query {
        consultarTodos {
          name
          idCar
          status
          idPhoto
          base64
        }
      }`
    })
}

export function useCards(){
    const{data, } = useQuery({
        queryFn: fetcher,
        queryKey: ['cards']
    })
    return{
        data: data?.data?.data?.consultarTodos
    }
}