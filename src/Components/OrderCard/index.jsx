import { XMarkIcon } from "@heroicons/react/24/outline";

const OrderCard = props => {
    /**
     * Renders an order card component.
     *
     * @param {Object} props - The props for the component.
     * @param {string} props.title - The title of the order.
     * @param {number} props.price - The price of the order.
     * @param {string} props.imageUrl - The URL of the image for the order.
     * @param {number} props.quantity - The quantity of the order.
     */
    const {id, title, price, imageUrl, handleDelete, quantity } = props;

    
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{ title }</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{ price }</p>
                <XMarkIcon 
                    className="h-6 w-6 cursor-pointer"
                    onClick={() => handleDelete(id)} />
            </div>
        </div>
    )
}

export default OrderCard;