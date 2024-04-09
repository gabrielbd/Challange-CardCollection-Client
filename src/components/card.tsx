import styled from "styled-components";

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
`;

const Line = styled.div`
  width: 169px;
  height: 0px;
  border: 1px solid #f0eff0;
`;

const Description = styled.h3`
  width: 191px;
  height: 40px;
  font: normal 16px/20px Muli;
  letter-spacing: 0px;
  color: #263238;
  text-align: center;
  margin: 16px 0;
`;

const Buttons = styled.div`
  display: flex;
  width: 234px;
  height: 43px;
  background: #ffffff;
  box-shadow: inset 0px 3px 6px #0000000f;
  border-radius: 0px 0px 8px 8px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font: normal 15px/19px Muli;
  letter-spacing: 0px;
  color: #263238;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const IconEdit = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 8px;
`;
const IconDelet = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 8px;
`;

export function Card(props: CardProps) {
    const Image = styled.div<{ imageUrl: string }>`
      width: 95px;
      height: 95px;
      background-image: ${(props) => `url(${props.imageUrl})`};
      background-size: cover;
      background-position: center;
      border: 1px solid #e4e4e4;
      border-radius: 50%;
    `;
  
    const base64Url = `data:image/jpeg;base64,${props.base64}`;
  
    return (
      <CardStyle>
        <Image imageUrl={base64Url}></Image>
        <Line />
        <Description>{props.name}</Description>
        <Buttons>
          <Button>
            <IconEdit />
            Editar
          </Button>
          <Button>
            <IconDelet />
            Excluir
          </Button>
        </Buttons>
      </CardStyle>
    );
  }