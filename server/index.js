import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connectDB from './mongoDB/connect.js'
import postRoutes from './routes/PostRoutes.js'
import RegisterRoute from './routes/RegisterRoute.js'
import LoginRoute from './routes/LoginRoute.js'
import CommentRoute from './routes/CommentRoute.js'
import { Server } from 'socket.io'
import http from 'http'

dotenv.config()

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'https://buzz-talk-xi.vercel.app',
        methods: ['GET', 'POST'],
    }
})
app.use(cors({
    origin: 'https://buzz-talk-xi.vercel.app',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}))
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/register', RegisterRoute)
app.use('/api/v1/login', LoginRoute)
app.use('/api/v1/comment', CommentRoute)

app.get('/', async (req, res) => {
    res.send('Hello from server!')
})

/*io.on('connection', (socket) => {
    console.log(`Users connected to ${socket.id}`)

    socket.on('join_room', (data) => {
        socket.join(data)
        console.log(`user with id: ${socket.id} joined room: ${data}`)
    })

    socket.on('send_message', (data) => {
        socket.broadcast.emit('receive_message', data)
    })
})*/


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        server.listen(3001, () => console.log('server has started at port 3001'))
    } catch (error) {
        console.log(error)
    }
}

startServer()
