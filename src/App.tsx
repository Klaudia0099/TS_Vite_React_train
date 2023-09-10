import { useState } from 'react'

import './App.css'
import { Task1 } from './components/Task1'
import { Task2 } from './components/Task2'
import { Task3 } from './components/Task3'
import { Task4 } from './components/Task4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container--app'><Task1 taskName={'Task1'} taskID={1} doTask={(jakiśParametr) => jakiśParametr}/><br/><br/><Task2 /><br/><br/><Task3 /><br/><br/><Task4 />
      </div>
    </>
  )
}

export default App
