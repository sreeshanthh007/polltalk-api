
export const users : Record<string,string> = {}


export const addUser = (socketId:string,userName:string) : void =>{
  users[socketId] = userName
}

export const removeUser = (socketId:string) : void => {
  delete users[socketId]
}

export const getUserName = (socketId:string) : string | null =>{
  return users[socketId]
}