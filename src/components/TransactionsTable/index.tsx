import React from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import removeImg from "../../assets/remove.svg";

const TransactionsTable: React.FC = () => {
  const { transactions, removeTransaction } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === "withdraw" && "-"}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <button onClick={() => removeTransaction(transaction.id)}>
                <img src={removeImg} alt="Remover" />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
