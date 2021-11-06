import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
