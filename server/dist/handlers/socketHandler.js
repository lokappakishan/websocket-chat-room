"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleConnection = handleConnection;
function handleConnection(socket) {
    console.log('User connected');
    socket.on('message', (message) => {
        const messageObject = validMessage(message.toString(), socket);
        console.log('Received:', messageObject);
    });
    socket.on('error', (err) => {
        console.error('WebSocket error:', err);
    });
    socket.send('Hello from the websocket server');
}
function sendError(socket, error) {
    socket.send(JSON.stringify({ error }));
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
function validMessage(message, socket) {
    try {
        const parsed = JSON.parse(message);
        if (!isValidMessage(parsed)) {
            sendError(socket, 'Invalid or unsupported message format');
            return null;
        }
        return parsed;
    }
    catch (error) {
        sendError(socket, 'Malformed JSON');
        return null;
    }
}
