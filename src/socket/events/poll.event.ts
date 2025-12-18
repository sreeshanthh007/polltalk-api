import { poll } from "@models/poll.model";
import { POLL_EVENTS } from "@constants/constants";
import { Server, Socket } from "socket.io";





export const registerPollEvents = (io:Server,socket:Socket) : void =>{
  
    
  io.emit(POLL_EVENTS.POLL_DATA,poll);
  
  socket.on(POLL_EVENTS.POLL_VOTE,(optionId:string)=>{
    const option = poll.options.find(opt=>opt.id==Number(optionId));
    
    if(!option){
      return
    }
    
    option.vote+=1
   
    io.emit(POLL_EVENTS.POLL_UPDATE,option)
  })
}