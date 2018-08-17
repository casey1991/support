export interface Message {
  user: string;
  room: string;
  data: object[];
  text: string;
  type: number;
}
