import Link from "next/link";
import {useRouter} from "next/router";

export default function Navigation() {
    const router = useRouter()

    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between my-10'>
                <div className='text-2xl font-semibold'>Re:see</div>
                <div className='flex gap-16'>
                    <Link href={ "/" }>
                        <a className={ `text-lg ${router.pathname === '/' ? 'text-slate-900' : 'text-slate-600'} hover:text-slate-900 cursor-pointer transition duration-300 font-semibold` }>Магазин</a>
                    </Link>
                    <Link href={ "/team" }>
                        <a className={ `text-lg ${router.pathname === '/team' ? 'text-slate-900' : 'text-slate-600'} hover:text-slate-900 cursor-pointer transition duration-300 font-semibold` }>Команда</a>
                    </Link>
                    <Link href={ "/vacancy" }>
                        <a className={ `text-lg ${router.pathname === '/vacancy' ? 'text-slate-900' : 'text-slate-600'} hover:text-slate-900 cursor-pointer transition duration-300 font-semibold` }>Вакансии</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}