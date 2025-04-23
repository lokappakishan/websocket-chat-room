import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setCurrentRoom } from '../features/chat/chatSlice';
import { currentRoomType } from '../types';

const ChatSidebar = () => {
  const { currentRoom, rooms } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  const switchRoom = (room: currentRoomType) => {
    dispatch(setCurrentRoom(room));
  };
  return (
    <div className="p-4">
      <h3 className="font-[400] text-4xl px-2 mb-4">Chatroom</h3>
      <ul className="px-2 text-2xl text-gray-600">
        {rooms.map((item, index) => {
          const active = currentRoom === item ? 'bg-blue-50' : '';
          return (
            <li
              key={index}
              className={`rounded-lg p-2 cursor-pointer ${active}`}
              onClick={() => switchRoom(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatSidebar;

{
  /* <li className=" bg-blue-50 p-2 rounded-lg">General</li>
<li className="rounded-lg p-2">Tech Talk</li>
<li className="rounded-lg p-2">AI Discussions</li>
<li className="rounded-lg p-2">Sports</li> */
}
