import {useState} from "react";

export default function Banners({uuid}) {

  const [username, setUsername] = useState('Scondic')

  function fetchData() {
    getServerSideProps(username)
  }

  return (
    <div className={"container mx-auto"}>
      {uuid}
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="col-span-8 bg-slate-200 rounded-lg h-72 p-5 relative">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <div className="text-xl text-slate-900 font-semibold mb-4">
                Ник {JSON.stringify(username)}
              </div>
              <div className="text-lg text-slate-800 font-medium w-1/2">
                Мы запустили клановую систему, чтобы вы смогли объедениться
                с друзьями и сразились в командном рейтинге
              </div>
            </div>
            <div className="flex gap-4">
              <input
                className="text-md text-slate-900 placeholder:text-slate-500 font-semibold bg-slate-300 rounded-md px-5 py-3 outline-none"
                type="text"
                name="username"
                placeholder="Ваш никнейм"
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
              <button className="text-md text-slate-100 font-semibold bg-slate-900 rounded-md px-5 py-3"
                      onClick={fetchData()}>
                Сохранить
              </button>
            </div>
          </div>
          <img
            className="absolute right-5 bottom-0 scale-x-[-1]"
            src={`https://visage.surgeplay.com/bust/256/${uuid}`}
            alt={username}
          />
        </div>
        <div className="col-span-4 bg-slate-900 rounded-lg h-72 p-5">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <div className="text-xl text-slate-100 font-semibold mb-4">
                Старт клановой системы
              </div>
              <div className="text-lg text-slate-500 font-medium">
                Мы запустили клановую систему, чтобы вы смогли объедениться
                с друзьями и сразились в командном рейтинге
              </div>
            </div>
            <div className="flex">
              <button className="text-md font-semibold bg-slate-100 rounded-md px-5 py-3">
                Основать гильдию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/lololoshka`)
  const uuid = await response.json()

  return {props: {uuid}}
}