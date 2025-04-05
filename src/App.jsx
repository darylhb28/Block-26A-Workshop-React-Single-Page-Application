import { useState, useEffect } from 'react'
import './App.css'
import Players from './Players'
import SelectedPlayer from './SelectedPlayer'
import FavoritePlayer from './FavoritePlayer'


function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [favoritePlayer, setFavoritePlayer] = useState(null)


  return (
    <>
    <h1>MLB Players</h1>
    {favoritePlayer && !selectedPlayer && (
      <div>
        <FavoritePlayer favoritePlayer={favoritePlayer} setFavoritePlayer={setFavoritePlayer} />
      </div>
    )}
    {
      selectedPlayer ? (
      <div>
          <SelectedPlayer selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} favoritePlayer={favoritePlayer} setFavoritePlayer={setFavoritePlayer}/>
      </div> ) :
    <div className="playerList">
        <Players setSelectedPlayer={setSelectedPlayer} setFavoritePlayer={setFavoritePlayer} favoritePlayer={favoritePlayer} />
    </div>
    }
    </>
  )
}

export default App
