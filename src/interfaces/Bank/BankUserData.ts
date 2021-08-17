import BankCardsData from './BankCardsData';
import BankGroupData from './BankGroupData';
import BankTransactionData from './BankTransactionData';

export default interface BankUserData {
  accountNumber: string;
  accountOwnerName: string | null;
  subsidies: number;
  money: number;
  credit: number;
  transactions: BankTransactionData[];
  cards: BankCardsData[];
  groups: BankGroupData[];
  isGroup: boolean;
}
