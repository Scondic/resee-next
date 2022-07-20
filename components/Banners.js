import {useState} from "react"
import Image from "next/image";

export default function Banners() {

  const [username, setUsername] = useState('Scondic')
  const [uuid, setUuid] = useState({
    id: '82b0699f758a4f35947e46e5fee7e642',
    name: 'Scondic'
  })

  // 686095b4368d410d9ba6cfbde38c4110

  function fetchUuid(username) {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://api.minetools.eu/uuid/${username}`, requestOptions)
      .then(response => response.text())
      .then(result => setUuid(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }

  return (
    <div className={"container mx-auto"}>
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="col-span-8 bg-slate-200 rounded-lg h-72 p-5 relative">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <div className="text-xl text-slate-900 font-semibold mb-4">
                Подтвердите ваш Minecraft аккаунт
              </div>
              <div className="text-lg text-slate-800 font-medium w-1/2">
                Все купленные товары будут отправлены на аккаунт { username } на сервер Resee Hardcore
              </div>
            </div>
            <div className="flex gap-4">
              <input
                className="text-md text-slate-900 placeholder:text-slate-500 font-semibold bg-slate-300 rounded-md px-5 py-3 outline-none"
                type="text"
                name="username"
                placeholder="Ваш никнейм"
                value={username}
                maxLength={32}
                onChange={event => setUsername(event.target.value)}
              />
              <button className="text-md text-slate-100 font-semibold bg-slate-900 rounded-md px-5 py-3" onClick={() => fetchUuid(username)}>
                Сохранить
              </button>
            </div>
          </div>
          <img className="absolute right-5 bottom-0 scale-x-[-1]" src={`https://visage.surgeplay.com/bust/256/${uuid.id ?? '82b0699f758a4f35947e46e5fee7e642'}`} alt={uuid.name ?? 'Scondic'} />
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
              <button className="text-md font-semibold bg-slate-100 rounded-md px-5 py-3" onClick={uuid}>
                Основать гильдию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}