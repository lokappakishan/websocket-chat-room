import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import ChatInput from './components/ChatInput';
import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';
import { loadChatFromLocalStorage } from './features/chat/chatSlice';

function App() {
  const chatState = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const chatString = localStorage.getItem('chat');

    if (chatString) {
      const chatJson = JSON.parse(chatString);
      dispatch(loadChatFromLocalStorage(chatJson));
    }
  }, [dispatch]);

  useEffect(() => {
    const { currentRoom, messages } = chatState;
    localStorage.setItem('chat', JSON.stringify({ currentRoom, messages }));
  }, [chatState]);

  return (
    <div className="h-screen bg-gray-100 text-black p-4">
      <div className="bg-white text-black flex h-full rounded-2xl shadow-sm">
        <div className="w-[30%] border-r border-gray-200">
          <ChatSidebar />
        </div>
        <div className="w-[70%] flex flex-col">
          <ChatWindow />
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default App;
