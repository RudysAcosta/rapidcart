import { useRoutes } from "react-router-dom"

import Home from "../../Pages/Home"
import MyAccount from "../../Pages/MyAccount"
import MyOrder from "../../Pages/MyOrder"
import MyOrders from "../../Pages/MyOrders"
import NotFound from "../../Pages/NotFound"
import Signin from "../../Pages/Signin"


const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home/> },
        { path: '/my-account', element: <MyAccount/> },
        { path: '/my-order', element: <MyOrder/> },
        { path: '/my-orders', element: <MyOrders/> },
        { path: '/my-orders/last', element: <MyOrder /> },
        { path: '/my-orders/:id', element: <MyOrder /> },
        { path: '/signin', element: <Signin/> },
        { path: '/*', element: <NotFound/> },
    ])

    return routes
}

export default AppRoutes