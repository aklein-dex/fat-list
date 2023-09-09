type PlayerCard = {
    player: string,
    playerCount: number
};

const Player = ({ player, playerCount }: PlayerCard) => {
    return <li key={playerCount} className={playerCount < 2 ? 'team' : 'waiting'}>
        {playerCount}. {player} 
        <form method='get' action='/delete'>
            <input type="hidden" name="name" value={player}/>
            pin # <input type="password" name="password" size={4}/>
            <button className="btn-del" type="submit">🚽 X</button>
        </form>
    </li>;
}

export default Player;