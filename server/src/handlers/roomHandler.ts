import { WebSocket } from 'ws';

function joinRoom(socket: WebSocket, roomId: string) {
  console.log(` I want to join room ${roomId}`);
}
