import React from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import {
  useTransactions,
} from "../../hooks/useTransactions";

import { Container } from "./styles";

const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const { deposits, withdraw, total } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(withdraw)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
};

export default Summary;
