import { useContext } from "react"
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline"
import { ShoppingCartContext } from "../../Context"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
      context.setProductDetail(productDetail)
      context.openProductDetail()
      context.closeCheckoutSideMenu()
    }

    const addToCart = (event, product) => {
      event.stopPropagation()
      context.setCount(context.count + 1)
      context.setCartProducts([...context.cartProducts, {...product, quantity: 1}])
      context.openCheckoutSideMenu()
      context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.find(product => product.id === id) != undefined
      
        if (isInCart) {
          return (
            <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
              <CheckIcon 
                className='h-4 w-4 text-white'/>
            </div>
          )
        } else {
          return (
            <div 
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
            onClick={(event) => addToCart(event, data.data) }>
              <PlusIcon 
                className='h-4 w-4'/>
          </div>
          )
        } 
    }

    return (
        <div
          onClick={() => showProduct(data.data)} 
          className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
          <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span>
            <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt='headphones' />
            {renderIcon(data.data.id)}
          </figure>
          <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.data.title}</span>
            <span className='text-lg font-medium'>${data.data.price}</span>
          </p>
        </div>
      )
}

export default Card