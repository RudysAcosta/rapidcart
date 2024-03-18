import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping cart - increment quantity
    const [count, setCount] = useState(0)

    // ProductDetail - open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // ProductDetail - Show product detail
    const [productDetail, setProductDetail] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productDetail,
            setProductDetail

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}