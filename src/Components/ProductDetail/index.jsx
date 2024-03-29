import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './style.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

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
            <figure className='px-6'>
                <img 
                className='w-full h-full rounded-lg object-cover' 
                src={context.productDetail.image} 
                alt={context.productDetail.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productDetail.price}</span>
                <span className='font-medium text-md'>{context.productDetail.title}</span>
                <span className='font-light text-sm'>{context.productDetail.description}</span>
            </p>
        </aside>
    )

}

export default ProductDetail