import { deletCard } from '@/Utils/delet-card';
import React from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';



interface DeleteModalProps {
  onClose: () => void;
  cardId: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 438px;
  height: 434px;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  color: #DB2525;
  margin-top: 24px;
`;

const Description = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: #454545;
  text-transform: uppercase;
  margin-top: 12px;
`;

const HorizontalLine = styled.div`
  width: 364px;
  height: 0px;
  border: 1px solid #E4E4E4;
  margin-top: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const Button = styled.button`
  width: 165px;
  height: 48px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 23px;
  font-weight: 700;
  letter-spacing: 0px;
  margin: 10px 11px 0;`;

const DeleteButton = styled(Button)`
  background-color: #DB2525;
  box-shadow: 0px 3px 6px #92207242;
  border: none;
  color: #FFFFFF

`;

const CancelButton = styled(Button)`
  border: 1px solid #DB2525;
  box-shadow: 0px 3px 6px #92207242;
  color: #DB2525;
  background-color: #FFFFFF;

`;

const Circle = styled.div`
  width: 159px;
  height: 159px;
  background: #DB25250F;
  border: 6px solid #E4E4E4;
  border-radius: 50%;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 68px;
  height: 68px;
  font-size: 68px; /* Tamanho da fonte para o ícone */
  color: #DB2525;
`;


const DeleteModal: React.FC<DeleteModalProps> = ({ onClose, cardId }) => {
  
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    await deletCard(cardId); 
    queryClient.invalidateQueries(['cards']);
    onClose(); 
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ModalOverlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Circle>
            <Image src="Icon-trash.svg" alt="Imagem" />
          </Circle>
          <Title>Excluir</Title>
          <Description>Certeza que deseja excluir?</Description>
          <HorizontalLine />
          <ButtonContainer>
            <DeleteButton onClick={handleDelete}>Excluir</DeleteButton>
            <CancelButton onClick={onClose}>Cancelar</CancelButton>
          </ButtonContainer>
        </ModalContainer>
      </ModalOverlay>
    </QueryClientProvider>

  );
};

export default DeleteModal;