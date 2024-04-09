import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";


const InputContainer = styled.div`
  position: relative;
  max-width: 1046px;
  width: 100%;
  margin: 147px auto 0; /* Ajusta a margem para posicionar o input mais para baixo */
`;

export const PrimaryInput  = styled.input`
  width: 100%;
  height: 75px;
  padding: 0 16px;
  background: #FFFFFF;
  border: none;
  border-radius: 8px;
  opacity: 1;
  font-family: inherit;
  font-weight: 400;
  font-size: 24px;
  line-height:30px;
  letter-spacing: 0px;
  color: #757575; 
  box-shadow: 0px 3px 6px #00000029; 
`;

const MagnifyingGlass = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function PrimaryInputWSearchIcon(props: InputProps){
    return (
      <InputContainer>
        <PrimaryInput 
          {...props}
        />
        <MagnifyingGlass src="/lupa.svg" alt="Lupa" />
      </InputContainer>
    )
  }