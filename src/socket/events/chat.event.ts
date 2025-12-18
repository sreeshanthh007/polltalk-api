
import { CHAT_EVENTS } from "@constants/constants"
import { Server, Socket } from "socket.io"
import  { getUserName } from "@models/user.model"
import { messages } from "@models/message.model"


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
      console.log("newmessage",newMessage)
      
      messages.push(newMessage);
      
      io.emit(CHAT_EVENTS.NEW_MESSAGES,newMessage)

    });
    
    
    
    socket.on(CHAT_EVENTS.START_TYPING,(isTyping:boolean)=>{
      const username = getUserName(socket.id)
      
      if(!username) return
      
      
    
      socket.broadcast.emit(CHAT_EVENTS.TYPING,{
        username,
        isTyping
      })
    })
}