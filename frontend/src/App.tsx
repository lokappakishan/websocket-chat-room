import './App.css';
import ChatInput from './components/ChatInput';
import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';

function App() {
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
