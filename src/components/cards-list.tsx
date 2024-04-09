"use client"

import { useCards } from "@/hooks/useCards"
import { Card } from "./card";
import styled from "styled-components";



const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 234px);
    grid-gap: 32px;
    margin-top: 35px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;


interface CardsListProps{
}
export function CardsList(props : CardsListProps){
    const {data} = useCards();
    return(
       <ListContainer>
        {data?.map(cards => <Card 
            key={cards.idCar}
            name={cards.name}
            base64={cards.base64}
            idCar={cards.idCar}
            idPhoto={cards.idPhoto}
            status={cards.status}/>)}
       </ListContainer>
    )
}