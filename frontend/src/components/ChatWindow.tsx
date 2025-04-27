import { useEffect, useRef } from 'react';
import { useAppSelector } from '../app/hooks';
import { IncomingMessage } from './IncomingMessage';
import { UserMessage } from './UserMessage';

const ChatWindow = () => {
  const { currentRoom, messages } = useAppSelector((state) => state.chat);
  const currentRoomMessages = messages[currentRoom];
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <h2 className="p-4 font-[400] text-4xl border-b border-gray-200">
        {currentRoom}
      </h2>
      <div className="flex-1 overflow-y-auto">
        {currentRoomMessages.map((message, index) => {
          const { from: name, text: text } = message;
          return name === 'Manu' ? (
            <UserMessage key={index} text={text} name={name} />
          ) : (
            <IncomingMessage key={index} text={text} name={name} />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
