/* socketHandler.ts */
import { WebSocket } from 'ws';
import { IncomingMessage } from '../types/message';
import { sendError } from '../utils/util';
import { broadcastToRoom, joinRoom, removeSocket } from './roomHandler';

export function handleConnection(socket: WebSocket) {
  console.log('User connected');

  socket.on('message', (message) => {
    const messageObject = parseClientMessage(message.toString(), socket);
    console.log('Received:', messageObject);

    if (messageObject.type === 'join') {
      const roomId = messageObject.payload.roomId!;
      joinRoom(socket, roomId);
      console.log(`Socket joined room ${roomId}`);
    }

    if (messageObject.type === 'chat') {
      const msg = messageObject.payload.message!;
      broadcastToRoom(socket, msg);
    }
  });

  socket.on('close', () => {
    console.log('User disconnected');
    removeSocket(socket);
  });
  socket.on('error', (err) => {
    console.error('WebSocket error:', err);
  });

  socket.send('Hello from the websocket server');
}

function isValidMessage(msg: any): boolean {
  if (typeof msg !== 'object' || msg === null) return false;
  if (msg?.type === 'join')
    return (
      typeof msg?.payload?.roomId === 'string' &&
      msg?.payload?.roomId.trim() !== ''
    );
  if (msg?.type === 'chat')
    return (
      typeof msg?.payload?.message === 'string' &&
      msg?.payload?.message.trim() !== ''
    );
  return false;
}

function parseClientMessage(message: string, socket: WebSocket) {
  try {
    const parsed = JSON.parse(message);
    if (!isValidMessage(parsed)) {
      sendError(socket, 'Invalid or unsupported message format');
      return null;
    }
    return parsed;
  } catch (error) {
    sendError(socket, 'Malformed JSON');
    return null;
  }
}
