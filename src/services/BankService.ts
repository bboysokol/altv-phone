import axios from 'axios';
import { TransferPayload } from 'types/bank';
import BankUserData from '../interfaces/Bank/BankUserData';

export default class BankService {
  public static getBankAccount(groupId: number) {
    return axios.get<BankUserData>('bank/getBankAccount', {
      params: {
        groupId,
      },
    });
  }
  public static sendBankTransfer(transferPayload: TransferPayload) {
    return axios.post('bank/sendBankTransfer', transferPayload);
  }
}
