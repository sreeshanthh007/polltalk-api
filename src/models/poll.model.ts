
 interface IPollOption{
  id:number
  text:string
  vote:number
}

 interface Poll { 
  question:string
  options:IPollOption[]
}

export const poll : Poll = {
  question:"Which framework is the Best ?",
  options:[
    {id:1,text:"React",vote:0},
    {id:2,text:"Angular",vote:0}, 
    {id:3,text:"Vue",vote:0}
  ]
}
