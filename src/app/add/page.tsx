import { redirect } from 'next/navigation';
import { kv } from "@vercel/kv";

type Props = {
  params: {},
  searchParams: {
    name: string,
    password: string,
  }
};

export default async function Add(props: Props) {
  const { name, password } = props.searchParams;

  const exist = await kv.get(name);

  if (!exist) {
    const add = await kv.rpush('players', name);
    const player = await kv.set(name, password);
  }
  console.log(name)
  redirect('/');
}