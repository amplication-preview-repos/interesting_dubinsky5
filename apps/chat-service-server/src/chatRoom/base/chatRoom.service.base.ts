/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ChatRoom as PrismaChatRoom,
  Message as PrismaMessage,
  Participant as PrismaParticipant,
} from "@prisma/client";

export class ChatRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ChatRoomCountArgs, "select">): Promise<number> {
    return this.prisma.chatRoom.count(args);
  }

  async chatRooms(
    args: Prisma.ChatRoomFindManyArgs
  ): Promise<PrismaChatRoom[]> {
    return this.prisma.chatRoom.findMany(args);
  }
  async chatRoom(
    args: Prisma.ChatRoomFindUniqueArgs
  ): Promise<PrismaChatRoom | null> {
    return this.prisma.chatRoom.findUnique(args);
  }
  async createChatRoom(
    args: Prisma.ChatRoomCreateArgs
  ): Promise<PrismaChatRoom> {
    return this.prisma.chatRoom.create(args);
  }
  async updateChatRoom(
    args: Prisma.ChatRoomUpdateArgs
  ): Promise<PrismaChatRoom> {
    return this.prisma.chatRoom.update(args);
  }
  async deleteChatRoom(
    args: Prisma.ChatRoomDeleteArgs
  ): Promise<PrismaChatRoom> {
    return this.prisma.chatRoom.delete(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<PrismaMessage[]> {
    return this.prisma.chatRoom
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }

  async findParticipants(
    parentId: string,
    args: Prisma.ParticipantFindManyArgs
  ): Promise<PrismaParticipant[]> {
    return this.prisma.chatRoom
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .participants(args);
  }
}
