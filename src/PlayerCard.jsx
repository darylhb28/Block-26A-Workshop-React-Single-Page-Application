import "./PlayerCard.css"

function PlayerCard ({player, setSelectedPlayer}) {
    return (
        <div className="playerCard">
            <h2>{player.full_name}</h2>
            <p>{player.position}</p>
            <p>{player.team.display_name}</p>
            <p>Number: {player.jersey}</p>
            <button onClick={()=>
                setSelectedPlayer(player.id)
            }>More Player Info</button>
        </div>
    )



}

export default PlayerCard