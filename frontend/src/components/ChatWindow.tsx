import { useAppSelector } from '../app/hooks';
import { IncomingMessage } from './IncomingMessage';
import { UserMessage } from './UserMessage';

const ChatWindow = () => {
  const { currentRoom, messages } = useAppSelector((state) => state.chat);
  const currentRoomMessages = messages[currentRoom];
  console.log(currentRoomMessages);
  return (
    <div className="h-[80%]">
      <h2 className="p-4 font-[400] text-4xl border-b border-gray-200">
        {currentRoom}
      </h2>
      <div>
        {currentRoomMessages.map((message, index) => {
          const { from: name, text: text } = message;
          return name === 'Manu' ? (
            <UserMessage key={index} text={text} name={name} />
          ) : (
            <IncomingMessage key={index} text={text} name={name} />
          );
        })}
      </div>
    </div>
  );
};

export default ChatWindow;
