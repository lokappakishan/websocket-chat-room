interface IncomingMessageProps {
  text: string;
  name?: string;
}

export function IncomingMessage({
  name = 'Incoming message',
  text,
}: IncomingMessageProps) {
  return (
    <div className="chat chat-start">
      <div className="chat-header">{name}</div>
      <div className="chat-bubble bg-gray-100 text-gray-600">{text}</div>
    </div>
  );
}
