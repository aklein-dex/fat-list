import { kv } from "@vercel/kv";
import Player from '../components/Player';

export default async function Home() {
  const players = await kv.lrange<string>('players', 0, -1);
  let playerCount: number = 1;

  return (
    <main className="flex min-h-screen flex-col items-center p-18">

      <div className="mt-4 mb-4 font-bold tracking-tight text-white-900 sm:text-4xl text-3xl">
        Futsal AXA Tokyo<br />
        Next game: June, 10th<br />
        Aquafield, Shibakoen station<br />
        19:00-21:00
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Fill up the form if you want to join!</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Max 15 players, then you will be on the waiting list.</p>
        <p className="mt-1 text-sm leading-6 text-gray-600">Pin # will be asked when you want to cancel.</p>

        <form method='get' action='/add'>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6">
                Pin #
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              🏃‍♂️ Join
            </button>
          </div>
        </form>
      </div>


      <ul className="mt-6">
        {players?.map((player) =>
          <Player key={playerCount} player={player} playerCount={playerCount++} />
        )}
      </ul>

    </main>
  )
}
