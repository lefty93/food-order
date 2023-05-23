export const initialState = {
    cart: []
}

export const getCoffeeTotal = (cart) =>
    cart?.reduce((amount, coffee) => coffee.price + amount, 0);

function reducer(state, action) {
    console.log(action)

    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.coffee]
            }
        default:
            return state;
    }
}

export default reducer;