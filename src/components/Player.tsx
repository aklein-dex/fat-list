"use client"

import Modal from './Modal';

type PlayerCard = {
    player: string,
    playerCount: number
};

const Player = ({ player, playerCount }: PlayerCard) => {
    return <li key={playerCount} className={playerCount < 16 ? 'team' : 'waiting'}>
        {playerCount}. {player} 
        <Modal player={player}/>
    </li>;
}

export default Player;