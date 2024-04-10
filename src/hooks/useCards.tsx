import { CardsFetchResponse } from "@/types/cards-response";
import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { mountQuery, mountQueryPagination } from "@/Utils/graphql-filters";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<CardsFetchResponse> => {
    return axios.post(API_URL,{query})
}


export function useCards(){
    const { search } = useFilter()
    const { page }  = useFilter()
    if(search !== null && search !== "")
    {
        const query = mountQuery()
        const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['cards']
         })
        const cardsAll = data?.data?.data?.consultarTodos
        let filteredCards = null;

        if (search !== null && search !== "") {
      filteredCards = cardsAll?.filter(cardsAll => cardsAll.name.toLowerCase().includes(search.toLowerCase()))
        }
        return {
        data: filteredCards
        }
    }else{
        const query = mountQueryPagination(page)
        const{data, } = useQuery({
          queryFn: () => fetcher(query),
          queryKey: ['cards', page]
        }) 
        const cardsAll = data?.data?.data?.consultarTodosPagination
        return{
            data : cardsAll
        }
    }
    
  }