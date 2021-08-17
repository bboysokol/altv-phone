import { CallLogType } from '../../helpers/enums/CallLogType';

export default interface CallLog {
  phoneNumber: number;
  type: CallLogType;
  date: string;
}
