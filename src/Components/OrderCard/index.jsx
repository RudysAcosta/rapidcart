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
        renderChangeIcon =
            <div className="relative flex items-center max-w-[8rem]">
                <button className="flex items-center justify-center p-4 h-8 bg-gray-800 hover:bg-gray-700 rounded-s-sm " type="button" id="decrement-button" >
                    <MinusIcon className="w-4 h-4 text-white stroke-current stroke-2"/>
                </button>
                <div 
                    className="flex w-full h-8 px-2 items-center justify-center bg-gray-800 text-center text-white" type="text" id="quantity-input">
                 3
                </div>
                <button className="flex items-center justify-center p-4 h-8 bg-gray-800 hover:bg-gray-700 rounded-e-sm" type="button" id="increment-button"  >
                    <PlusIcon className="w-4 h-4 text-white stroke-current stroke-2"  />
                </button> 
            </div>
    }

    return (
        <div className="flex my-2 h-32 justify-between items-center ">
            <div className="flex items-center justify-between gap-2 h-full">
                <figure className="w-28 h-28">
                    <img className="w-full h-full rounded-sm object-cover" src={imageUrl} alt={title} />
                </figure>
                <div className="flex flex-col justify-between h-full py-2">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-light">{ title }</p>
                        <p className="text-sm font-light">{ title }</p>
                    </div>
                    
                    {renderChangeIcon}
                </div>
                
            </div>
            <div className="flex flex-col justify-end items-center h-full py-2">
                <p className="text-lg font-medium">${ price }</p>
            </div>
        </div>
    )
}

export default OrderCard;