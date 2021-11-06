import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

interface TransactionsProviderProps {
  children: ReactNode;
}

interface Transaction {
  id: number;
  type: string;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
}

// TransactionInput pega tudo de Transaction e exclu id e creactedAt
type TransactionInput = Omit<Transaction, "id" | "createdAt">;

// Com pick se seleciona quais os campos de Transaction que se deseja pegar
// type TransactionInput = Pick<
//   Transaction,
//   "type" | "title" | "amount" | "category"
// >;

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", transactionInput);
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
