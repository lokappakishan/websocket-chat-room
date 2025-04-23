import { useAppSelector } from '../app/hooks';

const ChatWindow = () => {
  const currentRoom = useAppSelector((state) => state.chat.currentRoom);

  return (
    <div className="h-[80%]">
      <h2 className="p-4 font-[400] text-4xl border-b border-gray-200">
        {currentRoom}
      </h2>
      <div>
        <div className="chat chat-start">
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble bg-gray-100 text-gray-600">
            Hey there, welcome!
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble bg-blue-50 text-gray-600">
            Thanks, happy to join!
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble bg-gray-100 text-gray-600">
            Let me know if you need anything.
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble bg-gray-100 text-gray-600">
            Hey there, welcome!
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble bg-blue-50 text-gray-600">
            Thanks, happy to join!
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble bg-gray-100 text-gray-600">
            Let me know if you need anything.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
