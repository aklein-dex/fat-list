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

  console.log(`Add: receive request for ${name}`);

  if (name.length < 1 || password.length < 1) {
    console.log(`Add: Name or password too small`);
    redirect('/');
  }

  const exist = await kv.get(name);

  if (exist) {
    console.log(`Add: user ${name} already exists`);
    redirect('/');
  }

  console.log(`Add: adding ${name}`);
  const add = await kv.rpush('players', name);
  const player = await kv.set(name, password);

  redirect('/');
}