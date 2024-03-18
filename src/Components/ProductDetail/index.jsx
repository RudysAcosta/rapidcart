import { XMarkIcon } from '@heroicons/react/24/outline'
import './style.css'

const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col z-10 fixed right-0 border border-black rounded-lg bg-white">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon className="h-6 w-6" />
                </div>
            </div>
        </aside>
    )

}

export default ProductDetail