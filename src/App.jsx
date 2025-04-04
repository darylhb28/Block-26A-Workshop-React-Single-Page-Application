import { useState, useEffect } from 'react'
import './App.css'
import Players from './Players'
import SelectedPlayer from './SelectedPlayer'


function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null)


  return (
    <>
    {
      selectedPlayer ?
      <div>
          <SelectedPlayer selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}/>
      </div> :
    <div className="playerList">
        <Players setSelectedPlayer={setSelectedPlayer} />
    </div>
    }
    </>
  )
}

export default App
