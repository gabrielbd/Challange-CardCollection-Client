"use client"

import React from 'react';
import styled from 'styled-components';

interface BotaoCriarCardProps {
  handleSubmit: () => void;
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
  @media (max-width: 767px) {
    margin-left: 0px;
 }
`;

const BotaoCriarCard: React.FC<BotaoCriarCardProps> = ({ handleSubmit }) => (
  <Botao onClick={handleSubmit}>Criar card</Botao>
);

export default BotaoCriarCard;