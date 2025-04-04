import { useState, useEffect } from 'react'
import './App.css'
import Players from './Players'


function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null)


  return (
    <>
    {
      selectedPlayer ?
      <div>
          <SelectedPlayer />
      </div> :
    <div className="playerList">
        <Players />
    </div>
    }
    </>
  )
}

export default App
