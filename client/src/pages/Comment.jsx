import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineSend } from 'react-icons/ai'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3001')

const Comment = () => {
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState([])
  const { name } = useParams()

  const sendReplies = () => {
    if (message !== '') {
      const messageData = {
        date: new Date(),
        message: message
      }
      socket.emit('send_message', messageData)
    }

  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived((list) => [...list, data.message])
    })
  }, [socket])

  useEffect(() => {
    const savedCard = JSON.parse(
      localStorage.getItem(
        'Message')
    )
    if (savedCard) {
      setMessageReceived(savedCard)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Message', JSON.stringify(messageReceived))
  }, [messageReceived])

  return (
    <div className='w-full text-[#ead9d1] sm:p-20 p-5' onSubmit={sendReplies}>
      <h1 className='text-center'>Replies to {name}'s post</h1>

      <div className='h-[70vh] mt-5'>
        {message &&
          <div>
            <span className='text-[10px] float-right'>*Your reply</span><br />
            <div className='bg-[#3a3a43] mt-1 rounded-r-[20px] p-2 w-auto float-right'>
              {message}
            </div>
          </div>}



        <div className=' mt-10'>
          {messageReceived.map((message) => (
            <div className='text-[15px] flex'>
              <h1 className='bg-[#3a3a43] mt-5 rounded-r-[20px] p-2  float-left w-auto'>{message}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className='w-[90%]  bg-transparent fixed bottom-0  pb-10 flex gap-3'>
        <input className='w-full  h-[40px] rounded border p-5 border-[#5f5f5f] bg-[#3a3a43] outline-[#8c6dfd]'
          placeholder='Enter comment'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='bg-[#8c6dfd] hover:opacity-50 p-2 rounded' onClick={sendReplies}><AiOutlineSend className='bg-transparent text-[25px]' /></button>
      </div>
    </div>
  )
}

export default Comment