import {  TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

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
    const {id, title, price, imageUrl, quantity, handleDelete, handleChange } = props;

    let renderDeleteIcon, renderChangeIcon
    
    if (handleDelete) {
        renderDeleteIcon =  <TrashIcon className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-600" onClick={() => handleDelete(id)} />
    }

    if (handleChange) { 
        renderChangeIcon =  <div>
                                <select name="" id="" value={quantity} onChange={ (e) => handleChange(id, e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="2">4</option>
                                    <option value="3">5</option>
                                    <option value="2">6</option>
                                    <option value="3">7</option>
                                </select>
                            </div>    
    }

    return (
        <div className="flex justify-between items-center my-2 h-28">
            <div className="flex items-center justify-between gap-2 h-full">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <div className="flex flex-col justify-between h-full py-4">
                    <p className="text-sm font-light">{ title }</p>
                    <p className="text-lg font-medium">${ price }</p>
                </div>
                
            </div>
            <div className="flex flex-col justify-between items-center h-full py-4">
                <div>
                {renderDeleteIcon}
                </div>
                 {renderChangeIcon}
            </div>
        </div>
    )
}

export default OrderCard;