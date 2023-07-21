import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'

function Home() {
  return (
    <div className='h-screen flex'>
    <Sidebar />
    <Main />
    </div>
  )
}

export default Home