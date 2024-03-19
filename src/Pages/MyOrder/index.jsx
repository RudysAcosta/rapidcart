import { useContext } from "react"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context"

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.split('/').slice(-1)[0]

    if (index === 'last') index = context.order?.length - 1

    return (
        <Layout>
            
            <div className="flex items-center justify-center relative w-80">
                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
                </Link>
                <h1>My Orders</h1>
            </div>

            <div className='flex flex-col w-80'>
            {
                context.order?.[index]?.products.map(product => (
                    <OrderCard
                        id={product.id}  
                        key={product.id}
                        title={product.title} 
                        price={product.price} 
                        imageUrl={product.images[0]}
                        quantity={product.quantity} />
                ))
            }

            </div>
        </Layout>
    )
}

export default MyOrder