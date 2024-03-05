
import ShoppingCart from './icons/ShoppingCart'

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center
    group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <img src="pizza-5991179_640.png" />
        <h4 className="font-semibold my-2">Papperoni Pizza</h4>
        <p className="text-gray-500 text-sm">Taste the unbelievable taste</p>
        <button className='flex bg-primary gap-2 mx-auto items-center rounded-full px-4 py-2 text-white'>
             Rs <b> 99/-</b> 
             <ShoppingCart/>
        </button>
    </div>
  )
}

export default MenuItem