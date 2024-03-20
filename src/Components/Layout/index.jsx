import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const Layout = ({children}) => {

    const context = useContext(ShoppingCartContext)

    return (
        <>
         { (context.isCheckoutSideMenuOpen || context.isProductDetailOpen) &&  <div className="overlay"></div> }
            <div className="flex flex-col items-center mt-20">
                { children }
            </div>
        </>
    )
}

export default Layout