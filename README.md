# websocket-chat-server

A simple WebSocket-based chat server built with Node.js and TypeScript.

## Features

- Join chat rooms
- Send and receive messages in real-time
- Room-based broadcasting
- Basic message validation

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add environment variables

Create a `.env` file:

```
PORT=5001
```

### 3. Run the server

```bash
npm run dev
```

## Message Format

### Join a Room

```json
{
  "type": "join",
  "payload": {
    "roomId": "123"
  }
}
```

### Send a Message

```json
{
  "type": "chat",
  "payload": {
    "message": "Hello!"
  }
}
```

## Folder Structure

```
src/
  handlers/       # Socket and room handling logic
  types/          # Message types
  utils/          # Helpers and validation
  server.ts       # Entry point
```
