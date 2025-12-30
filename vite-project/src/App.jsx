import React from 'react' 
import LeftSide from './components/Leftside'
import RightSide from './components/RightSide'
import Main from './components/Main'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
     <Navbar/>
      <div className='flex p-4 bg-slate-400'>
        <LeftSide/>
        <Main/>
        <RightSide/>
      </div>
    </>
  )
}

export default App
