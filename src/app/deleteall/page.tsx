import { redirect } from 'next/navigation';
import { kv } from "@vercel/kv";

export default async function DeleteAll() {
  console.log(`DeleteAll: receive request`);

  let player = await kv.lpop<string>('players');
  while(player) {
    await kv.del(player);
    console.log(`DeleteAll: delete ${player}`);
    player = await kv.lpop<string>('players');
  }
  

  redirect('/');
}