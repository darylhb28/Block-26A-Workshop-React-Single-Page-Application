import { useState, useEffect } from 'react'



function SelectedPlayer ({selectedPlayer, setSelectedPlayer}) {
    const [player, setPlayer] = useState(null)

    useEffect(()=>{
        async function fetchSinglePlayer(){
            try {
                const response = await fetch (`https://api.balldontlie.io/mlb/v1/players/${selectedPlayer}`, {headers: {Authorization:"f1e066f8-8f7c-4261-a791-42f2dcc6fc96"}})
                const res = await response.json()
                setPlayer(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchSinglePlayer()
      },[])

      console.log("Selected Player:", player)

      return(
        <>{ player && (
            <div className="playerCard">
                <h2>{player.full_name}</h2>
                <p>Hometown: {player.birth_place}</p>
                <p>Age: {player.age}</p>
                <p>Height: {player.height}</p>
                <p>Weight: {player.weight}</p>
                <p>Years in MLB: {2025 - player.debut_year}</p>
                <button onClick={()=>
                    setSelectedPlayer(null)
                }>Back to Players</button>
            </div>
        )
    }
    </>
      )

}

export default SelectedPlayer