export type currentRoomType =
  | 'General'
  | 'Tech Talk'
  | 'AI Discussions'
  | 'Sports';

export type Message = { from: string; text: string };

export type MessagePayload = { roomId: currentRoomType; message: Message };
