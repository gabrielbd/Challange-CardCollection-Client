"use client"

import { useFilter } from "@/hooks/useFilter";
import { styled } from "styled-components";
import { useState } from "react";
import NewCardModal from "../modal-add/newCard-modal";



interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    max-width: 1046px;
    margin-top: 50px;
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
}
`;
const PageNavigation = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    margin-right: 28px;
    display: flex;
    align-items: center;
}
`;

const PageNumber = styled.span`
  font-size: 20px;
  margin: 0 10px;
`;

export function FilterBar(props: FilterBarProps) {
    
    const{setPage} = useFilter();
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpenCard, setIsOpenCard] = useState(false);
    const handleOpenCard = () => setIsOpenCard(true);
    const handleCloseCard = () => setIsOpenCard(false);

    const goToPage = (page: number) => {
        setPage(page);
        setCurrentPage(page);
      };
    return (
      <FilterContainer>
        <ResultText>Resultado de busca</ResultText>
        <FilterContainerPriority>
            <PageNavigation>
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                {'<'}
                </button>
                <PageNumber>{currentPage}</PageNumber>
                <button onClick={() => goToPage(currentPage + 1)}>{'>'}</button>
            </PageNavigation>
        </FilterContainerPriority>

        <NewCardButton onClick={handleOpenCard}>Novo Card</NewCardButton>
        {isOpenCard && <NewCardModal onClose={handleCloseCard} />}
      </FilterContainer>
    );
  }