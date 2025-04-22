// utils.ts
import WebSocket from 'ws';

export function sendError(socket: WebSocket, error: string) {
  socket.send(JSON.stringify({ error }));
}
