import { WebSocket } from 'ws';
import { sendError } from '../utils/util';

const roomToSocketMap = new Map<string, Set<WebSocket>>();
const socketToRoomMap = new Map<WebSocket, string>();

//  User joins a particular room
function joinRoom(socket: WebSocket, roomId: string) {
  if (!roomToSocketMap.get(roomId)) {
    roomToSocketMap.set(roomId, new Set());
  }

  roomToSocketMap.get(roomId)?.add(socket);
  socketToRoomMap.set(socket, roomId);
}

// User broadcasts messages to a room
function broadcastToRoom(socket: WebSocket, message: string) {
  let roomId = socketToRoomMap.get(socket);
  if (!roomId) {
    sendError(socket, 'You must join a room before sending messages.');
    return;
  }

  let room = roomToSocketMap.get(roomId);
  if (!room) {
    sendError(socket, 'Room does not exist.');
    return;
  }

  room?.forEach((user) => {
    if (user.readyState === WebSocket.OPEN) {
      try {
        user.send(JSON.stringify({ type: 'chat', payload: { message } }));
      } catch (err) {
        console.error(`Failed to send to socket in room ${roomId}`, err);
      }
    }
  });
}

function removeSocket(socket: WebSocket) {
  //remove socket from socketRoomId map
  const roomId = socketToRoomMap.get(socket);
  if (!roomId) {
    console.log(
      `The socket that needs to be deleted does not exists in socket to roomId map `
    );
    return;
  }
  socketToRoomMap.delete(socket);

  // remove socket from roomToSocketMap
  const room = roomToSocketMap.get(roomId);
  if (room?.size === 1 && room.has(socket)) {
    roomToSocketMap.delete(roomId);
    console.log(`removed socket and cleared room successfully`);
    return;
  }

  room?.delete(socket);
  console.log(`removed socket successfully`);
}

export { joinRoom, broadcastToRoom, removeSocket };
