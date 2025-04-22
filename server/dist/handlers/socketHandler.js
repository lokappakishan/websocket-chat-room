"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleConnection = handleConnection;
const util_1 = require("../utils/util");
const roomHandler_1 = require("./roomHandler");
function handleConnection(socket) {
    console.log('User connected');
    socket.on('message', (message) => {
        const messageObject = parseClientMessage(message.toString(), socket);
        console.log('Received:', messageObject);
        if (messageObject.type === 'join') {
            const roomId = messageObject.payload.roomId;
            (0, roomHandler_1.joinRoom)(socket, roomId);
            console.log(`Socket joined room ${roomId}`);
        }
        if (messageObject.type === 'chat') {
            const msg = messageObject.payload.message;
            (0, roomHandler_1.broadcastToRoom)(socket, msg);
        }
    });
    socket.on('close', () => {
        console.log('User disconnected');
        (0, roomHandler_1.removeSocket)(socket);
    });
    socket.on('error', (err) => {
        console.error('WebSocket error:', err);
    });
    socket.send('Hello from the websocket server');
}
function isValidMessage(msg) {
    var _a, _b, _c, _d;
    if (typeof msg !== 'object' || msg === null)
        return false;
    if ((msg === null || msg === void 0 ? void 0 : msg.type) === 'join')
        return (typeof ((_a = msg === null || msg === void 0 ? void 0 : msg.payload) === null || _a === void 0 ? void 0 : _a.roomId) === 'string' &&
            ((_b = msg === null || msg === void 0 ? void 0 : msg.payload) === null || _b === void 0 ? void 0 : _b.roomId.trim()) !== '');
    if ((msg === null || msg === void 0 ? void 0 : msg.type) === 'chat')
        return (typeof ((_c = msg === null || msg === void 0 ? void 0 : msg.payload) === null || _c === void 0 ? void 0 : _c.message) === 'string' &&
            ((_d = msg === null || msg === void 0 ? void 0 : msg.payload) === null || _d === void 0 ? void 0 : _d.message.trim()) !== '');
    return false;
}
function parseClientMessage(message, socket) {
    try {
        const parsed = JSON.parse(message);
        if (!isValidMessage(parsed)) {
            (0, util_1.sendError)(socket, 'Invalid or unsupported message format');
            return null;
        }
        return parsed;
    }
    catch (error) {
        (0, util_1.sendError)(socket, 'Malformed JSON');
        return null;
    }
}
