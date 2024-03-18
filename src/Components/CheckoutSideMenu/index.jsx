import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './style.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    
    const handleDelete = (id) => {
        const newCartProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCount(context.count - 1)
        context.setCartProducts(newCartProducts)
    }

    const handleChange = (id, value) => {
        const newCartProducts = context.cartProducts.map(product => {
            if (product.id === id) {
                return {...product, quantity: value}
            } else {
                return product
            }
        })
        context.setCartProducts(newCartProducts)
    }

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
                        id={product.id}  
                        handleDelete={ handleDelete}
                        handleChange={handleChange}
                        key={product.id}
                        title={product.title} 
                        price={product.price} 
                        imageUrl={product.image}
                        quantity={product.quantity} />
                ))
            }

            </div>
            <div>
                Total: ${totalPrice(context.cartProducts)}
            </div>
            
        </aside>
    )

}

export default CheckoutSideMenu