import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './style.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT: ', context.productDetail)

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col z-10 fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon
                        onClick={() => context.closeProductDetail()} 
                        className="h-6 w-6 cursor-pointer" />
                </div>
            </div>
            <figure>
                <img 
                className='w-full h-full rounded-lg' 
                src={context.productDetail.image} 
                alt={context.productDetail.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span>${context.productDetail.price}</span>
                <span>{context.productDetail.title}</span>
                <span>{context.productDetail.description}</span>
            </p>
        </aside>
    )

}

export default ProductDetail