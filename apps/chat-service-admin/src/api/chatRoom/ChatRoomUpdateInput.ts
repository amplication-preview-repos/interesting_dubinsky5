import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { ParticipantUpdateManyWithoutChatRoomsInput } from "./ParticipantUpdateManyWithoutChatRoomsInput";

export type ChatRoomUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  name?: string | null;
  participants?: ParticipantUpdateManyWithoutChatRoomsInput;
};
