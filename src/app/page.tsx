import { kv } from "@vercel/kv";
import Player from '../components/Player';
import FormParticipate from "@/components/FormParticipate";

export default async function Home() {
  const players = await kv.lrange<string>('players', 0, -1);
  let playerCount: number = 1;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>FAT LIST</div>

      <ul>
        {players?.map((player) =>
          <Player player={player} playerCount={playerCount++} />
        )}
      </ul>

      <form method='get' action='/add'>
        Name <input type="text" name="name" />
        Pwd <input type="text" name="password" />
        <button type="submit">Submit</button>
      </form>

    </main>
  )
}
