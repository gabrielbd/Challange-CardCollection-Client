"use client"

import React, { useState } from "react";
import styled from "styled-components";
import { EditarCardModal } from "../modal-edit/editCard-modal";
import DeleteCardModal  from "../modal-delet/deletedCard-modal";

interface CardProps {
  name: string;
  idCar: string;
  status: string;
  idPhoto: string;
  base64: string;
}

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 234px;
  height: 267px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #e5e5e5;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  opacity: 1;
  padding: 16px;
  position: relative; /* Para posicionar as bolinhas corretamente */
`;

const Line = styled.div`
  width: 169px;
  margin-top: 15px;
  height: 0px;
  border: 1px solid #f0eff0;
`;
const VerticalLine = styled.div`
  height: 25px;
  width: 0px;
  border-left: 1px solid #f0eff0;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;

const StatusIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 8px;
`;

const StatusAtivo = styled(StatusIndicator)`
  background-color: green;
`;

const StatusInativo = styled(StatusIndicator)`
  background-color: red;
`;

const Description = styled.h3`
  width: 191px;
  height: 40px;
  text-align: center;
  margin: 16px 0;
  font-family: inherit;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #263238;
`;

const Buttons = styled.div`
  display: flex;
  width: 234px;
  height: 28px;
  background: #ffffff;
  box-shadow: inset 0px 3px 6px #0000000f;
  border-radius: 0px 0px 8px 8px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex: 1;
  font-family: inherit;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #263238;
  opacity: 0.92;
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

const IconEdit = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 8px;
`;
const IconDelet = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 8px;
`;

export function Card(props: CardProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const base64Url = `data:image/jpeg;base64,${props.base64}`;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    setIsDeleting(true);
  };

  return (
    <CardStyle>
      {props.status === "1" ? <StatusAtivo /> : <StatusInativo />}

      <div
        style={{
          width: "95px",
          height: "95px",
          backgroundImage: `url(${base64Url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #e4e4e4",
          borderRadius: "50%",
        }}
      ></div>
      <Line />
      <Description>{props.name}</Description>
      <Buttons>
        <Button onClick={handleEditClick}>
          <IconEdit src="/Icon-edit.svg" alt="edit" />
          Editar
        </Button>
        <VerticalLine />
        <Button onClick={handleDeleteClick}>
          <IconDelet src="/Icon-trash.svg" alt="edit" />
          Excluir
        </Button>
      </Buttons>
      {isEditing && (
        <EditarCardModal
          onClose={() => setIsEditing(false)}
          card={{
            id: props.idCar,
            name: props.name,
            status: props.status,
            base64: props.base64,
          }}
        />
      )}
      {isDeleting && (
        <DeleteCardModal
          onClose={() => setIsDeleting(false)}
          cardId={props.idCar}
        />
      )}
    </CardStyle>
  );
}

export default Card;