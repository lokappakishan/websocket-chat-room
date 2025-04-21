/* server.ts */

import dotenv from 'dotenv';
import { WebSocketServer } from 'ws';
import { handleConnection } from './handlers/socketHandler';

dotenv.config();

const PORT = Number(process.env.PORT) || 5001;
const wss = new WebSocketServer({ port: PORT });

wss.on('connection', handleConnection);

console.log(`WebSocket server listening on ws://localhost:${PORT}`);
