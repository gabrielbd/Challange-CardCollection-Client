"use client"

import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { styled } from "styled-components";
import {ReactNode, createContext, useState } from "react";


interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    max-width: 1046px;
    width: 100%;
    align-items: start;
    justify-content: space-between;

`
const ResultText = styled.span`
  font-family: inherit;
  font-size: 32px;
  line-height:40px;
  letter-spacing: 0px;
  color: #5f1478;
  opacity: 1;

  @media (max-width: 767px) {
     font-size: 25px;
     line-height:35px;
}
`;

const NewCardButton = styled.button`
  width: 173px;
  height: 48px;
  background: #e76316;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  opacity: 1;
  border: none;
  cursor: pointer;

  font-family: inherit;
  font-size: 18px;
  line-height:23px;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;

  @media (max-width: 767px) {
    font-size: 15px;
    width: 103px;
}

`;
const FilterContainerPriority = styled.div`
button {
    border: none;
    background: transparent;
    cursor: pointer;

    font-family: inherit;
    font-size: 20px;
    line-height:40px;
    letter-spacing: 0px;
    color: #5f1478;
    opacity: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        display: none;
    }
}
`;
const PriorityFilter = styled.ul`
    position: absolute;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;
    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }
    li + li {
        margin-top: 4px;
    }
`;

export function FilterBar(props: FilterBarProps) {
    
    const{setType} = useFilter();


    const[isOpen, SetIsOpen] = useState(false);
    const handleOpen = () => SetIsOpen(prev => !prev)

    const handleChangeType = (value: FilterType) =>{
        setType(value)
        SetIsOpen(false)
    }
    return (
      <FilterContainer>
        <ResultText>Resultado de busca</ResultText>
        <FilterContainerPriority>
            <button onClick={handleOpen}>
                Filtrar por Status
            </button>
            {isOpen && 
            <PriorityFilter>
                <li onClick={() => handleChangeType(FilterType.ALL)}>Sem Filtro</li>
                <li onClick={() => handleChangeType(FilterType.ACTIVATED)}>Cards - Ativados</li>
                <li onClick={() => handleChangeType(FilterType.DISABLED)}>Cards - Desativados</li>
            </PriorityFilter>
        }
        </FilterContainerPriority>

        <NewCardButton>Novo Card</NewCardButton>
      </FilterContainer>
    );
  }