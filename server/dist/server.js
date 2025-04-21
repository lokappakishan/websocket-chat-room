"use strict";
/* server.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const ws_1 = require("ws");
const socketHandler_1 = require("./handlers/socketHandler");
dotenv_1.default.config();
const PORT = Number(process.env.PORT) || 5001;
const wss = new ws_1.WebSocketServer({ port: PORT });
wss.on('connection', socketHandler_1.handleConnection);
console.log(`WebSocket server listening on ws://localhost:${PORT}`);
