"use client"
import Image from "next/image";
import { styled } from "styled-components"
import { PrimaryInputWSearchIcon } from "./primary-input";
import { useFilter } from "@/hooks/useFilter";

interface HeaderProps{
}


const HeaderBase = styled.header`
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    width: 100%; 
    margin: 0 auto; 
`;


const TagHeader = styled.div`
  padding: 14px 24px;
  width: 100%;
  background: linear-gradient(272deg, #ae276f 0%, #5f1478 100%);
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
`;



const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 261px;
  background-image: url("/fundo-busca@2x.png");
  background-size: cover;
  background-position: center;
`;

const StyledImage = styled(Image)`
  background: 0% 0% no-repeat padding-box;
  opacity: 1 ;
`;

export function Header(props : HeaderProps){
  const{setSearch , search} = useFilter();

    return(
        <HeaderBase>
           <TagHeader>
            <StyledImage
              src="/logo-teste.png"
              alt="Logo"
              width={192}
              height={37}
            />
           </TagHeader>
           <BackgroundImage>
             <PrimaryInputWSearchIcon 
             value={search}
             handleChange={setSearch}
              type="text" placeholder="Digite aqui sua busca..." />
           </BackgroundImage>
        </HeaderBase>
        
    )
}