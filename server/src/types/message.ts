export type JoinMessage = {
  type: 'join';
  payload: {
    roomId: string;
  };
};

export type ChatMessage = {
  type: 'chat';
  payload: {
    message: string;
  };
};

export type IncomingMessage = JoinMessage | ChatMessage;
