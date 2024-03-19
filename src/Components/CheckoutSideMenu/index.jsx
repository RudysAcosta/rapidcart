import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
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

    /**
     * Handles the checkout process.
     */
    const handleCheckout = () => {
        
        const orderData = {
            products: context.cartProducts,
            totalProducts: context.count,
            totalPrice: totalPrice(context.cartProducts),
            date: new Date().toLocaleDateString()
        }

        context.setOrder([...context.order, orderData])
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex flex-col z-10 fixed right-0 border border-black bg-white`}>
            <div className="flex justify-between items-center p-6 border-b">
                <div>
                    <ArrowLeftIcon
                        onClick={() => context.closeCheckoutSideMenu()} 
                        className="h-6 w-6 cursor-pointer text-gray-800" />
                </div>
                <h2 className="font-medium text-xl text-gray-800">My Order</h2>
                
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                        id={product.id}  
                        handleDelete={ handleDelete}
                        handleChange={handleChange}
                        key={product.id}
                        title={product.title} 
                        price={product.price} 
                        imageUrl={product.images[0]}
                        quantity={product.quantity} />
                ))
            }

            </div>
            <div className='px-6 pb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='text-gray-800'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>

                <Link to='/my-orders/last'>
                    <button
                        className='w-full py-2 mt-4 bg-black text-white rounded-lg' 
                        onClick={() => handleCheckout() }>Checkout</button>
                </Link>
            </div>
        </aside>
    )

}

export default CheckoutSideMenu