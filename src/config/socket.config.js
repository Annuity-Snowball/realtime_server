import { Server } from 'socket.io';

let io;

export function init(server) {
    io = new Server(server);
    console.log("socket.io initialized")
    return io;
}

export function getIO() {
    if (!io) {
        throw new Error('Socket.io not initialized!');
    }
    return io;
}
