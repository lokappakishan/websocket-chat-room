import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currentRoomType } from '../../types';

interface ChatRoomState {
  currentRoom: currentRoomType;
  rooms: currentRoomType[];
}

const initialState: ChatRoomState = {
  currentRoom: 'General',
  rooms: ['General', 'Tech Talk', 'AI Discussions', 'Sports'],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setCurrentRoom: (state, action: PayloadAction<currentRoomType>) => {
      state.currentRoom = action.payload;
    },
  },
});

export const { setCurrentRoom } = chatSlice.actions;
export default chatSlice.reducer;
