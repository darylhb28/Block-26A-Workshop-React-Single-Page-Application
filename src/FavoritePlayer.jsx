import { useEffect, useState } from "react"

function FavoritePlayer({favoritePlayer, setFavoritePlayer}) {
    const [player, setPlayer] = useState(null)

    useEffect(()=>{
        async function fetchSinglePlayer(){
            try {
                const response = await fetch (`https://api.balldontlie.io/mlb/v1/players/${favoritePlayer}`, {headers: {Authorization:"f1e066f8-8f7c-4261-a791-42f2dcc6fc96"}})
                const res = await response.json()
                setPlayer(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchSinglePlayer()
        },[])
        console.log("Favorite Player:", {player})

        return(
        <>{ player && (
            <div className="favoriteplayerCard">
                <h1>🌟 FAVORITE 🌟 </h1>
               <h2>{player.full_name}</h2>
                <p>{player.position}</p>
                <p>{player.team.display_name}</p>
                <p>Number: {player.jersey}</p>
                <button onClick={()=>
                    setFavoritePlayer(null)
                }>Unfavorite</button>
            </div>
        )
    } 
    </>
)
}
        







export default FavoritePlayer