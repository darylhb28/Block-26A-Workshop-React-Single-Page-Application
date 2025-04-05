import { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard'


function Players ({setSelectedPlayer, setFavoritePlayer, favoritePlayer}) {
const [players, setPlayers] = useState([])


    useEffect(()=>{
        async function fetchPlayers(){
            try {
                const response = await fetch ("https://api.balldontlie.io/mlb/v1/players?per_page=50", {headers: {authorization:"f1e066f8-8f7c-4261-a791-42f2dcc6fc96"}})
                const res = await response.json()
                setPlayers(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPlayers()
      },[])

      return(
        <div>
            {
                players.map((player)=>{
                    return <PlayerCard  key={player.id} player={player} setSelectedPlayer={setSelectedPlayer} setFavoritePlayer={setFavoritePlayer} favoritePlayer={favoritePlayer}/>
                })
            }
        </div>


      )

   



}


export default Players