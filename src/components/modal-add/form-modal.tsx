"use client"

import React from 'react';
import styled from 'styled-components';

const InputDiv = styled.div`
    margin-top: 48px;
`;

const Label = styled.label`
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #454545;
  opacity: 1;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  margin-top: 6px;
  ::placeholder {
    font-family: inherit;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;
  }
  font-family: inherit;
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 10px;
`;

const FileInputContainer = styled.div`
  position: relative;
`;

const BotaoEscolherArquivo = styled.label`
  margin-right: 8px;
  margin-top: 12px;
  position: absolute;
  top: 0;
  right: 0;
  width: 224px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e76316;
  border-radius: 8px;
  box-shadow: 0px 3px 6px #e763162e;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-family: inherit;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0px;
  color: #e76316;
  opacity: 1;
`;
const Line = styled.div`
  width: 575px;
  margin-top: 53px;
  height: 0px;
  border: 1px solid #f0eff0;
`;

interface FormModalCardProps {
  cardName: string;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  imageFile: File | null;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  isFileSelected: boolean;
  setIsFileSelected: React.Dispatch<React.SetStateAction<boolean>>;
  errorImage: string | null;
  errorCard: string | null;
}

const FormModalCard: React.FC<FormModalCardProps> = ({
  cardName,
  setCardName,
  imageFile,
  setImageFile,
  isFileSelected,
  setIsFileSelected,
  errorImage,
  errorCard,
}) => (
  <>
    <InputDiv>
      <Label>Digite um nome para o card</Label>
      <Input
        placeholder="Digite o título"
        type="text"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
      />
      {errorCard && <span>{errorCard}</span>}
    </InputDiv>

    <InputDiv>
      <Label>Inclua uma imagem para aparecer no card</Label>
      <FileInputContainer>
        <Input placeholder={isFileSelected ? imageFile?.name : 'Nenhum arquivo escolhido'} readOnly />
        <BotaoEscolherArquivo htmlFor="arquivo">Escolher Arquivo</BotaoEscolherArquivo>
        <input
          id="arquivo"
          type="file"
          style={{ display: 'none' }}
          onChange={(e) => {
            setImageFile(e.target.files?.[0] || null);
            setIsFileSelected(true);
          }}
        />
      </FileInputContainer>
      {errorImage && <span>{errorImage}</span>}
    </InputDiv>

    <Line></Line>
  </>
);

export default FormModalCard;