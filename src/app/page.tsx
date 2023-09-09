import { kv } from "@vercel/kv";
import Player from '../components/Player';

export default async function Home() {
  const players = await kv.lrange<string>('players', 0, -1);
  let playerCount: number = 1;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-18">
      <div>
        Futsal AXA Tokyo<br/>
        Next game: October 10th
      </div>

      <div className="formAdd">
        <form method='get' action='/add'>
          Name <input type="text" name="name" size={8}/> &nbsp;&nbsp;
          pin # <input type="text" name="password" size={4}/> <br/>
          <button className="btn-blue" type="submit">🏃‍♂️ Join!</button>
        </form>
      </div>

      <ul>
        {players?.map((player) =>
          <Player key={playerCount} player={player} playerCount={playerCount++} />
        )}
      </ul>

    </main>
  )
}
