import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import http from "http";
import { Server as WebsocketServer } from "socket.io";
import "express-async-errors";

import routes from "./routes";
import AppError from "./errors/AppError";

import "./database";

const sockets: any = {};

const app = express();

const server = http.createServer(app);
const io = new WebsocketServer(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

server.listen(process.env.PORT || 3333, () => {
  console.log("server started on port 3333");
});

io.on("connection", (socket) => {
  socket.on("init", (userId) => {
    sockets[userId] = socket.id;
    console.log('conexão nova do usuário', userId);
  });

  socket.on("enviarProntuario", ({ medico, prontuario }) => {
    console.log('recebido', sockets, medico)
    io.to(sockets[medico]).emit("receberProntuario", prontuario);
  });
});
