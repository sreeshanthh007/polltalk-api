import { CHAT_EVENTS } from "@constants/constants";
import { addUser, removeUser } from "@models/user.model";
import { registerChatEvents } from "@socket/events/chat.event";
import { registerPollEvents } from "@socket/events/poll.event";
import { Server, Socket } from "socket.io";


export const registerSocketHandlers = (io:Server,socket:Socket):void=>{
  
  
  socket.on(CHAT_EVENTS.USER_JOIN,(username:string)=>{
    if(!username){
      return;
    }
    addUser(socket.id,username.trim())

  });
  
  
  registerChatEvents(io,socket)
  registerPollEvents(io,socket)
 
  socket.on("disconnect",()=>{
    removeUser(socket.id)
    console.log("socket disconnected")
  });
}