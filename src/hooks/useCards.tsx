import { CardsFetchResponse } from "@/types/cards-response";
import axios, { Axios, AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/Utils/graphql-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<CardsFetchResponse> => {
    return axios.post(API_URL,{query})
}


export function useCards(){
  const { type , search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(type)
    const{data, } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['cards', type]
    })

    const cardsAll = data?.data?.data?.consultarTodos
    const filteredCards = cardsAll?.filter(cardsAll => cardsAll.name.toLowerCase().includes(searchDeferred.toLowerCase()))

    return{
        data: filteredCards
    }
}