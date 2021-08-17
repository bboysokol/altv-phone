import Message from './Message';

export default interface Conversation {
  id: number;
  from: string;
  messages: Message[];
}
