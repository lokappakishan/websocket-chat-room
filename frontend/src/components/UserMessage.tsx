interface UserMessageProps {
  text: string;
  name?: string;
}

export function UserMessage({
  text,
  name = 'Obi-Wan Kenobi',
}: UserMessageProps) {
  return (
    <div className="chat chat-end">
      <div className="chat-header">{name}</div>
      <div className="chat-bubble bg-blue-50 text-gray-600">{text}</div>
    </div>
  );
}
