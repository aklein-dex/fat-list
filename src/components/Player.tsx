type PlayerCard = {
    player: string,
    playerCount: number
};

const Player = ({ player, playerCount }: PlayerCard) => {
    return <li key={playerCount} className={playerCount < 2 ? 'team' : 'waiting'}>
        {playerCount} 🚀✅ {player} 
        <form method='get' action='/delete'>
            <input type="hidden" name="name" value={player}/>
            Pwd <input type="text" name="password" />
            <button type="submit">x</button>
        </form>
    </li>;
}

export default Player;