import React, { useState } from 'react';
import styled from 'styled-components';
import FormularioCard from './form-modal';
import BotaoCriarCard from './botao-modal';
import { criarCard } from '@/Utils/add-card';
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
  background-color: #f6f4f6cc;
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

interface NewCardModalProps {
  onClose: () => void;
}

const NewCardModal: React.FC<NewCardModalProps> = ({ onClose }) => {
  const [cardName, setCardName] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errorImage, setErrorImage] = useState<string | null>(null);
  const [errorCard, setErrorCard] = useState<string | null>(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

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
      const data = await criarCard(cardName, imageBase64);
      queryClient.invalidateQueries(['cards']);
      onClose();
      console.log('Resposta da criação do card:', data);
      setErrorImage(null);
      onClose();
    } catch (error) {
      console.error('Erro ao criar card', error);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
    <ModalContainer onClick={handleBackgroundClick} isOpen={true}>
      <ModalContent>
        <CriarCard>
          <ImageContainer>
            <Image src="icone_criar.svg" />
          </ImageContainer>
          <Text>Criar Card</Text>
        </CriarCard>

        <Line></Line>

        <FormularioCard
          cardName={cardName}
          setCardName={setCardName}
          imageFile={imageFile}
          setImageFile={setImageFile}
          isFileSelected={isFileSelected}
          setIsFileSelected={setIsFileSelected}
          errorImage={errorImage}
          errorCard={errorCard}
        />
        <BotaoCriarCard handleSubmit={handleSubmit} />
      </ModalContent>
    </ModalContainer>
    </QueryClientProvider>

  );
};

export default NewCardModal;