const ChatInput = () => {
  return (
    <div className="h-[20%] flex justify-center items-center gap-5 border-t border-gray-200">
      <input
        type="text"
        placeholder="Type a message"
        className="input input-xl w-[65%] bg-white border border-gray-200"
      />
      <button className="btn btn-soft btn-xl w-[15%]">Send</button>
    </div>
  );
};

export default ChatInput;
