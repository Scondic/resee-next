import {useState} from "react"

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
      <div className="grid grid-cols-12 gap-5 mx-5 sm:mx-0 mb-5">
        <div className="col-span-12 md:col-span-6 xl:col-span-8 bg-slate-200 rounded-lg md:h-64 p-5 relative">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <div className="text-xl text-slate-900 font-semibold mb-4">
                Подтвердите ваш Minecraft аккаунт
              </div>
              <div className="text-lg text-slate-800 font-medium xl:w-1/2 mb-5 md:mb-0 lg:w-1/2">
                Все купленные товары будут отправлены на аккаунт { username } на сервер Resee Hardcore
              </div>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-4">
              <input
                className="text-md text-slate-900 placeholder:text-slate-500 font-semibold bg-slate-300 rounded-md px-5 py-3 w-48 xl:w-auto outline-none"
                type="text"
                name="username"
                placeholder="Ваш никнейм"
                value={username}
                maxLength={32}
                onChange={event => setUsername(event.target.value)}
              />
              <button className="text-md text-slate-100 lg:z-10 font-semibold bg-slate-900 rounded-md px-5 py-3" onClick={() => fetchUuid(username)}>
                Сохранить
              </button>
            </div>
          </div>
          <img className="absolute hidden lg:block lg:w-48 xl:w-60 z-0 right-5 bottom-0 scale-x-[-1]" src={`https://visage.surgeplay.com/bust/256/${uuid.id ?? '82b0699f758a4f35947e46e5fee7e642'}`} alt={uuid.name ?? 'Scondic'} />
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 bg-slate-900 rounded-lg md:h-64 p-5">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <div className="text-xl text-slate-100 font-semibold mb-4">
                Старт клановой системы
              </div>
              <div className="text-lg text-slate-500 font-medium mb-5 md:mb-0">
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