import "./PlayerCard.css"

function PlayerCard({ player, setSelectedPlayer, setFavoritePlayer, favoritePlayer }) {
    return (
      <div className="playerCard">
        <h2>{player.full_name}</h2>
        <p>{player.position}</p>
        <p>{player.team.display_name}</p>
        <p>Number: {player.jersey}</p>
  
        <button onClick={() => setSelectedPlayer(player.id)}>
          More Player Info
        </button>
        <br />
  
        {favoritePlayer === player.id ? (
          <button disabled> ✅ Marked as Favorite!</button>
        ) : (
          <button
            onClick={() => {
              setFavoritePlayer(player.id);
              setSelectedPlayer(null);
            }}
          >
            Mark as Favorite
          </button>
        )}
      </div>
    );
  }

export default PlayerCard