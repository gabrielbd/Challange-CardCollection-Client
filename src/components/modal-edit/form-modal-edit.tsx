import React from 'react';
import styled from 'styled-components';

interface FormModalEditProps {
  cardName: string;
  setCardName: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  isFileSelected: boolean;
  setIsFileSelected: (value: boolean) => void;
  errorImage: string | null;
  errorCard: string | null;
}

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
  border: 1px solid #B9B9B9;
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

const BotaoEscolherArquivo = styled.label`
  margin-right: 8px;
  margin-top: 12px;
  position: absolute;
  top: 0;
  right: 0;
  width: 224px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #E76316;
  border-radius: 8px;
  box-shadow: 0px 3px 6px #E763162E;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0px;
  color: #E76316;
  opacity: 1;
`;

const FileInputContainer = styled.div`
  position: relative;
`;

const Select = styled.select`
  width: 100%;
  height: 60px;
  border: 1px solid #B9B9B9;
  border-radius: 8px;
  margin-top: 6px;
  padding-left: 10px;
  font-family: inherit;
  font-weight: 300;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
`;

const FormModalEdit: React.FC<FormModalEditProps> = ({
  cardName,
  setCardName,
  status,
  setStatus,
  imageFile,
  setImageFile,
  isFileSelected,
  setIsFileSelected,
  errorImage,
  errorCard,
}) => (
  <>
    <InputDiv>
      <Label>Digite um nome para editar o card</Label>
      <Input placeholder='Digite o título' type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} />
      {errorCard && <span>{errorCard}</span>}
    </InputDiv>

    <InputDiv>
      <Label>Inclua uma imagem para aparecer no card</Label>
      <FileInputContainer>
        <Input placeholder={isFileSelected ? imageFile?.name : 'Nenhum arquivo escolhido'} readOnly/>
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

    <InputDiv>
      <Label>Selecione o status do card</Label>
      <Select value={status === "1" ? "1" : "2"} onChange={(e) => setStatus(e.target.value)}>
          <option value="1">Ativo</option>
          <option value="2">Inativo</option>
      </Select>
    </InputDiv>
  </>
);

export default FormModalEdit;