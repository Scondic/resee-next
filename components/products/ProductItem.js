export default function ProductItem({ name, price, image }) {
    return (
        <div className="flex items-center justify-center flex-col w-full bg-slate-200 rounded-lg p-5">
            <div className="flex items-center justify-center bg-slate-300 w-16 h-16 rounded-full">
                <img
                    className="w-11 h-11"
                    src={ image }
                    alt={ name }
                />
            </div>
            <div className="text-xl text-slate-900 font-semibold my-4">
                { name }
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="text-xl text-slate-900 font-semibold my-4">
                    {price} ₽
                </div>
                <div className="text-xl text-slate-900 font-semibold my-4">
                    В корзину
                </div>
            </div>
        </div>
    )
}