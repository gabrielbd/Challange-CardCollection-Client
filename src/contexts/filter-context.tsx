"use client"
import {ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 1,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({children}: ProviderProps){
    const[search, setSearch] = useState('')
    const[page, setPage] = useState(0)

    return(
        <FilterContext.Provider 
            value={{
                search, 
                page,
                setSearch, 
                setPage,
            }}>
            {children}
        </FilterContext.Provider>
    )
}