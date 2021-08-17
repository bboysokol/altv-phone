import axios, { AxiosResponse } from 'axios';
import Contact from 'interfaces/Contacts/Contact';
import CallLog from 'interfaces/Dialler/CallLog';
import Conversation from 'interfaces/Messages/Conversation';
import SendSmsData from 'interfaces/Messages/SendSmsData';
import PhoneInfo from 'interfaces/Settings/PhoneInfo';
import Wallpaper from 'interfaces/Settings/Wallpaper';

export default class PhoneService {
  public static getContacts(): Promise<AxiosResponse<Contact[]>> {
    return axios.get<Contact[]>('phone/getAllContacts');
  }

  public static addContact(contact: Contact) {
    return axios.post('phone/addNewContact', contact);
  }

  public static getSmsData(): Promise<AxiosResponse<Conversation[]>> {
    return axios.get<Conversation[]>('phone/getAllSmsData');
  }

  public static getSmsById(id: number): Promise<AxiosResponse<Conversation>> {
    return axios.get<Conversation>('phone/getSmsData', {
      params: {
        id,
      },
    });
  }

  public static getSmsByNumber(number: number): Promise<AxiosResponse<Conversation>> {
    return axios.get<Conversation>('phone/getSmsConversationByNumber', {
      params: {
        number,
      },
    });
  }

  public static sendSms(sms: SendSmsData) {
    return axios.post('phone/sendSms', sms);
  }

  public static startCall(number: number) {
    return axios.post('phone/startCall', {
      number,
    });
  }

  public static answerCall() {
    return axios.post('phone/answerCall');
  }

  public static cancelCall() {
    return axios.post('phone/cancelCall');
  }

  public static speakerStatusChange() {
    return axios.post('phone/speakerStatusChange');
  }

  public static deleteContacts(ids: number[]) {
    return axios.post('phone/deleteContacts', {
      ids,
    });
  }

  public static deleteConversations(ids: number[]) {
    return axios.post('phone/deleteConversations', { ids });
  }

  public static updateWallpaper(wallpaper: Wallpaper) {
    return axios.post('phone/updateWallpaper', wallpaper);
  }

  public static getWallpaper(): Promise<AxiosResponse<Wallpaper>> {
    return axios.get<Wallpaper>('phone/getWallpaper');
  }

  public static getPhoneInfo(): Promise<AxiosResponse<PhoneInfo>> {
    return axios.get<PhoneInfo>('phone/getPhoneInfo');
  }

  public static sendVCard() {
    return axios.post('phone/sendVCard');
  }

  public static getCallLog(): Promise<AxiosResponse<CallLog>> {
    return axios.get<CallLog>('phone/getCallLog');
  }
}
