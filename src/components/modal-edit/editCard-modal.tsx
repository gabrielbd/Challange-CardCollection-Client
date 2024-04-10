"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import BotaoModalEdit from './botao-modal-edit';
import FormModalEdit from './form-modal-edit';
import { putCard } from '@/Utils/edit-card';
import { convertImageToBase64 } from '@/Utils/imageUtils'; 
import { useQueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';


interface ModalProps {
  isOpen: boolean;
}

const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F6F4F6CC;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: flex-end;
  display: flex;
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  width: 642px;
  height: 767px;
  padding: 20px;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
 }
`;

const CriarCard = styled.div`
margin: 49px;
display: flex;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 41px;
  left: 30px;
`;

const Image = styled.img`
  width: 46px;
  height: 46px;
`;

const Text = styled.span`
  position: absolute;
  top: 45px;
  left: 94px;
  font-family: inherit;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0px;
  color: #5f1478;
`;

const Line = styled.div`
  width: 575px;
  margin-top: 53px;
  height: 0px;
  border: 1px solid #f0eff0;
`;

interface EditarCardModalProps {
  onClose: () => void;
  card: {
    id: string;
    name: string;
    status: string;
    base64: string;
  };
}
  
export const EditarCardModal: React.FC<EditarCardModalProps> = ({ onClose, card }) => {
  const [cardName, setCardName] = useState<string>(card.name);
  const [status, setStatus] = useState<string>(card.status);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errorImage, setErrorImage] = useState<string | null>(null);
  const [errorCard, setErrorCard] = useState<string | null>(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  
    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  
    const validateFields = () => {
      let errorMsgImage = '';
      let errorMsgCard = '';
  
      if (!cardName) {
        errorMsgCard = 'Preencha o nome do card.';
      } else if (!imageFile) {
        errorMsgImage = 'Selecione uma imagem para seu card.';
      } else if (cardName.length < 3 || cardName.length > 20) {
        errorMsgCard = 'O nome do card deve ter entre 3 e 20 caracteres.';
      } else if (!['image/png', 'image/jpeg'].includes(imageFile.type)) {
        errorMsgImage = 'A imagem deve estar no formato PNG ou JPEG.';
      }
  
      setErrorCard(errorMsgCard);
      setErrorImage(errorMsgImage);
  
      return !errorMsgImage && !errorMsgCard;
    };
    
    const queryClient = useQueryClient();

    const handleSubmit = async () => {
        if (!validateFields()) {
          return;
        }
      
        try {
          if (!imageFile) {
            return;
          }
      
          const imageBase64 = await convertImageToBase64(imageFile); 
      
          const editedCard = { ...card, name: cardName, status: status, base64: imageBase64 };
      
          const data = await putCard(editedCard.id, editedCard.name, editedCard.status, editedCard.base64);
          queryClient.invalidateQueries(['cards']);
          console.log('Resposta da edição do card:', data);
          
          setErrorImage(null);
          onClose();
      
        } catch (error) {
          console.error('Erro ao editar card', error);
        }
      };

    const handleEditClick = () => {
      handleSubmit();
    };
  
    return (
    <QueryClientProvider client={queryClient}>
      <ModalContainer onClick={handleBackgroundClick} isOpen={true}>
        <ModalContent>
          <CriarCard>
            <ImageContainer>
              <Image src="icone_criar.svg" />
            </ImageContainer>
            <Text>Editar Card</Text>
          </CriarCard>
  
          <Line></Line>
  
          <FormModalEdit
            cardName={cardName}
            setCardName={setCardName}
            status={status}
            setStatus={setStatus}
            imageFile={imageFile}
            setImageFile={setImageFile}
            isFileSelected={isFileSelected}
            setIsFileSelected={setIsFileSelected}
            errorImage={errorImage}
            errorCard={errorCard}
          />
  
          <Line></Line>
  
          <BotaoModalEdit handleClick={handleEditClick} />
        </ModalContent>
      </ModalContainer>
    </QueryClientProvider>

    );
  };
  
  export default EditarCardModal;