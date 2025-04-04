import "./PlayerCard.css"

function PlayerCard ({player}) {
    return (
        <div className="playerCard">
            <h2>{player.full_name}</h2>
            <p>{player.position}</p>
            <p>{player.team.display_name}</p>
            <p>Number: {player.jersey}</p>
            <p>Hometown: {player.birth_place}</p>
        </div>
    )



}

export default PlayerCard