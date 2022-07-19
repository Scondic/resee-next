import {useState} from "react";
import ProductList from "./products/ProductList";

export default function Filters({products}) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')

  return (
    <>
      <div className={"container mx-auto"}>
        <div className='flex items-center justify-between w-full bg-slate-200 rounded-lg p-5 mb-5'>
          <select className='text-md text-slate-500 font-semibold bg-slate-300 rounded-md px-5 py-4 cursor-pointer w-60'
                  name='sort'
                  onChange={event => setFilter(event.target.value)}
                  defaultValue={"default"}
          >
            <option value='default' disabled>Категория</option>
            <option value='priceUp'>По возрастанию цены</option>
            <option value='priceDown'>По убыванию цены</option>
          </select>
          <label className='relative'>
                        <span className='absolute inset-y-0 left-0 flex items-center pl-4'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.7099 20.29L17.9999 16.61C19.44 14.8144 20.1374 12.5353 19.9487 10.2413C19.76 7.9473 18.6996 5.81278 16.9854 4.27664C15.2713 2.7405 13.0337 1.91951 10.7328 1.98247C8.43194 2.04543 6.24263 2.98756 4.61505 4.61514C2.98747 6.24272 2.04534 8.43203 1.98237 10.7329C1.91941 13.0338 2.74041 15.2714 4.27655 16.9855C5.81269 18.6997 7.94721 19.7601 10.2412 19.9488C12.5352 20.1375 14.8143 19.4401 16.6099 18L20.2899 21.68C20.3829 21.7737 20.4935 21.8481 20.6153 21.8989C20.7372 21.9497 20.8679 21.9758 20.9999 21.9758C21.1319 21.9758 21.2626 21.9497 21.3845 21.8989C21.5063 21.8481 21.6169 21.7737 21.7099 21.68C21.8901 21.4935 21.9909 21.2443 21.9909 20.985C21.9909 20.7257 21.8901 20.4765 21.7099 20.29V20.29ZM10.9999 18C9.61544 18 8.26206 17.5895 7.11091 16.8203C5.95977 16.0511 5.06256 14.9579 4.53275 13.6788C4.00293 12.3997 3.86431 10.9922 4.13441 9.63436C4.4045 8.2765 5.07119 7.02922 6.05016 6.05025C7.02912 5.07128 8.27641 4.4046 9.63427 4.1345C10.9921 3.8644 12.3996 4.00303 13.6787 4.53284C14.9578 5.06265 16.051 5.95986 16.8202 7.111C17.5894 8.26215 17.9999 9.61553 17.9999 11C17.9999 12.8565 17.2624 14.637 15.9497 15.9497C14.6369 17.2625 12.8564 18 10.9999 18V18Z'
              fill='#94A3B8'/>
          </svg>
        </span>
            <input
              className='text-md text-slate-900 placeholder:text-slate-500 font-semibold bg-slate-300 rounded-md px-14 py-3 outline-none'
              type='text'
              name='username'
              placeholder='Поиск товара'
              onChange={event => setQuery(event.target.value)}
            />
            <span className='absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z'
              fill='#94A3B8'
            />
          </svg>
        </span>
          </label>
        </div>
      </div>
      <ProductList products={products} query={query} filter={filter}/>
    </>
  )
}