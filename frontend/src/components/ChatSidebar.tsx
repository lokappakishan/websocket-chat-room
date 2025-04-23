const ChatSidebar = () => {
  return (
    <div className="p-4">
      <h3 className="font-[400] text-4xl px-2 mb-4">Chatroom</h3>
      <ul className="px-2 text-2xl text-gray-600">
        <li className=" bg-blue-50 p-2 rounded-lg">General</li>
        <li className="rounded-lg p-2">Tech Talk</li>
        <li className="rounded-lg p-2">AI Discussions</li>
        <li className="rounded-lg p-2">Sports</li>
      </ul>
    </div>
  );
};

export default ChatSidebar;
