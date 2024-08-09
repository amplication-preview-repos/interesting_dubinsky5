import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";
import { ParticipantCreateNestedManyWithoutChatRoomsInput } from "./ParticipantCreateNestedManyWithoutChatRoomsInput";

export type ChatRoomCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  name?: string | null;
  participants?: ParticipantCreateNestedManyWithoutChatRoomsInput;
};
