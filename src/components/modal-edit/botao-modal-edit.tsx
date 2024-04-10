import React from 'react';
import styled from 'styled-components';

interface BotaoModalEditProps {
  handleClick: () => void;
}

const Botao = styled.button`
  margin-top: 26px;
  margin-left: 410px;
  width: 167px;
  height: 48px;
  background: #e76316;
  box-shadow: 0px 4px 6px #92207242;
  border-radius: 8px;
  opacity: 1;
  font-family: inherit;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  border: none;
  cursor: pointer;
`;

const BotaoModalEdit: React.FC<BotaoModalEditProps> = ({ handleClick }) => (
  <Botao onClick={handleClick}>Editar card</Botao>
);

export default BotaoModalEdit;