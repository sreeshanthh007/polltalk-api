import "module-alias/register"
import express from "express"
import cors from "cors"
import http from "http"
import dotenv from "dotenv"
import { SocketServer } from "@websocket/socket.server"



dotenv.config()


const app = express()

const httpServer = http.createServer(app)

app.use(cors())

app.use(express.json())

SocketServer(httpServer)

const PORT = process.env.PORT

httpServer.listen(PORT,()=>{
  console.log(`server running on ${PORT}`)
})