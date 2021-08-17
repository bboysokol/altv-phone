export default interface BankTransactionData {
  accountFrom: number;
  accountTo: number;
  transactionType: number;
  transactionMethod: number;
  amount: number;
  title: string;
  date: string;
  transferIdentification: string | undefined;
}
