

import { Server } from "socket.io"
import {Server as HttpServer} from "http"
import { registerSocketHandlers } from "@handlers/socket.handler";


export const SocketServer = (httpServer:HttpServer) : Server =>{
  
    const io = new  Server(httpServer,{
      cors:{
        origin:process.env.CLIENT_URL,
        methods:["GET","POST"]
      }
    });
    
    io.on("connection",(socket)=>{
      console.log("socket connected successfully")
      registerSocketHandlers(io,socket)
    });
    
    return io
}