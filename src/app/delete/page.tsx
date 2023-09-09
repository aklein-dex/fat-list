import { redirect } from 'next/navigation';
import { kv } from "@vercel/kv";

type Props = {
  params: {},
  searchParams: {
    name: string,
    password: string,
  }
};

export default async function Delete(props: Props) {
  const { name, password } = props.searchParams;

  const exist = await kv.get(name);

  if (exist) {
    const passwordInCache = await kv.get<string>(name) || '';
    // I don't know why, I can compare passwordInCache... so I must convert it to json!
    const json = JSON.stringify(passwordInCache);

    if (json === password) {
      await kv.lrem('players', 0, name);
      await kv.del(name);
    }
    
  }
  console.log(name)
  redirect('/');
}