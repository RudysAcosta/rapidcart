import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import './style.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log(context.cartProducts)

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex flex-col z-10 fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon
                        onClick={() => context.closeCheckoutSideMenu()} 
                        className="h-6 w-6 cursor-pointer" />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
            {
                context.cartProducts.map(product => (
                    <OrderCard  
                        key={product.id}
                        title={product.title} 
                        price={product.price} 
                        imageUrl={product.image}
                        quantity={1} />
                ))
            }

            </div>
            
        </aside>
    )

}

export default CheckoutSideMenu