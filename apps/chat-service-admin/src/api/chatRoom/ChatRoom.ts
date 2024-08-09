import { Message } from "../message/Message";
import { Participant } from "../participant/Participant";

export type ChatRoom = {
  createdAt: Date;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  participants?: Array<Participant>;
  updatedAt: Date;
};
