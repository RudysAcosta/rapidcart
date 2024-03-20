
/**
 * Calculates the total price of the products in the cart.
 *
 * @param {Array} cartProducts - The array of products in the cart.
 * @returns {number} The total price of the products.
 */
export const totalPrice = (cartProducts) => {
    return cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0)
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});