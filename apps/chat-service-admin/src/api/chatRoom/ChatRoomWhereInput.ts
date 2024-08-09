import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";

export type ChatRoomWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  participants?: ParticipantListRelationFilter;
};
