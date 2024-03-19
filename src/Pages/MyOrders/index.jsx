import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"

function MyOrders() {
    const context = useContext(ShoppingCartContext)

    console.log(context.order)

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80">
                <h1>My Orders</h1>
            </div>

            <div className='flex flex-col w-80'>
                {
                    context.order?.map((order, index) => (
                        <Link to={`/my-orders/${order.id}`} key={index}>
                            <OrdersCard
                                key={index}
                                date={order.date}
                                totalProducts={order.totalProducts}
                                totalPrice={order.totalPrice} />
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrders