import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";


const InputContainer = styled.div`
  position: relative;
  max-width: 1046px;
  width: 100%;
  margin: 147px auto 0; 

  @media (max-width: 767px) {
    font-size: 15px;
    max-width: 346px;
  }
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

  @media (max-width: 767px) {
    font-size: 17px;
  }
`;

const MagnifyingGlass = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value : string,
  handleChange: (value: string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
    return (
      <InputContainer>
        <PrimaryInput 
          onChange={(event) => props.handleChange(event.target.value)} 
          {...props}
        />
        <MagnifyingGlass src="/lupa.svg" alt="Lupa" />
      </InputContainer>
    )
  }