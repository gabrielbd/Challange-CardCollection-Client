"use client"

import { useCards } from "@/hooks/useCards"

interface CardsListProps{

}
export function CardsList(props : CardsListProps){
    const {data} = useCards();
    console.log(data)
    return(
        <></>
    )
}