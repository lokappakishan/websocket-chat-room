import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currentRoomType, Message, MessagePayload } from '../../types';

interface ChatRoomState {
  currentRoom: currentRoomType;
  rooms: currentRoomType[];
  messages: {
    [K in currentRoomType]: Message[];
  };
}

const initialState: ChatRoomState = {
  currentRoom: 'General',
  rooms: ['General', 'Tech Talk', 'AI Discussions', 'Sports'],
  messages: {
    General: [],
    'Tech Talk': [],
    'AI Discussions': [],
    Sports: [],
  },
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setCurrentRoom: (state, action: PayloadAction<currentRoomType>) => {
      state.currentRoom = action.payload;
    },
    addMessage: (state, action: PayloadAction<MessagePayload>) => {
      const { roomId, message } = action.payload;
      if (!roomId) return;
      state.messages[roomId].push(message);
    },
    loadChatFromLocalStorage: (
      state,
      action: PayloadAction<Pick<ChatRoomState, 'currentRoom' | 'messages'>>
    ) => {
      state.currentRoom = action.payload?.currentRoom;
      state.messages = action.payload?.messages;
    },
  },
});

export const { setCurrentRoom, addMessage, loadChatFromLocalStorage } =
  chatSlice.actions;
export default chatSlice.reducer;
