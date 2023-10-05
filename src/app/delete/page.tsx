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

  console.log(`Delete: receive request for ${name}`);
  const exist = await kv.get(name);

  if (exist) {
    console.log(`Delete: user ${name} exists in Redis`);
    const passwordInCache = await kv.get<string>(name);

    if (passwordInCache && passwordInCache.toString() === password) {
      console.log(`Delete: password is matching, deleting user ${name}`);
      await kv.lrem('players', 0, name);
      await kv.del(name);
    }
    
  }

  redirect('/');
}