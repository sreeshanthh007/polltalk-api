

import { Server } from "socket.io"

import {Server as HttpServer} from "http"

export const SocketServer = (httpServer:HttpServer) : Server =>{
  
    const io = new  Server(httpServer,{
      cors:{
        origin:process.env.CLIENT_URL,
        methods:["GET","POST"]
      }
    });
    
    io.on("connection",()=>{
      console.log("socket connected successfully")
    });
    
    
    
    return io
}