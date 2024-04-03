import React from 'react'
import Sidebar from './chat-comp/sidebar'
import Chat from './chat-comp/chat'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home