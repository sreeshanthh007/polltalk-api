import { Server } from "node:http"
import { CHAT_EVENTS } from "shared/constants"
import { Socket } from "socket.io"
import { messages } from "models/message.model"
import { getUserName } from "models/user.model"


export const  registerChatEvents = (io:Server,socket:Socket) : void =>{
  
    socket.emit(CHAT_EVENTS.SHOW_HISTORY,messages)
  
  
    socket.on(CHAT_EVENTS.SEND_MESSAGE,(text:string)=>{
      
      const username = getUserName(socket.id)
      
      if(!username){
        return 
      }
      
      const newMessage = {
        username,
        text,
        time:new Date()
      }
      
      messages.push(newMessage);
      
      io.emit(CHAT_EVENTS.NEW_MESSAGES,newMessage)

    })
}