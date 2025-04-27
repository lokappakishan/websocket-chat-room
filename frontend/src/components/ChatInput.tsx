import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addMessage } from '../features/chat/chatSlice';

const ChatInput = () => {
  const [text, setText] = useState<string>('');
  const currentRoom = useAppSelector((state) => state.chat.currentRoom);
  const dispatch = useAppDispatch();

  // handle send new message
  const handleSendMessage = () => {
    if (!text.trim()) return;
    dispatch(
      addMessage({
        roomId: currentRoom,
        message: { from: 'Manu', text: text },
      })
    );
    setText('');
  };

  return (
    <div className="h-24 flex justify-center items-center gap-5 border-t border-gray-200">
      <input
        type="text"
        placeholder="Type a message"
        className="input input-xl w-[65%] bg-white border border-gray-200"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn btn-soft btn-xl w-[15%]"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
