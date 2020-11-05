import Cookie from "js-cookie";
const { default: Axios } = require("axios");
const { CART_ADD_ITEM, CART_REMOVE_ITEM } = require("../constants/cartConstants");

// set getState to using cookie 
const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        })
        const { cart: { cartItems } } = getState();
        // cookie
        Cookie.set("cartItems", JSON.stringify(cartItems))
    } catch (error) {

    }
}

const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId })
}

export { addToCart, removeFromCart };