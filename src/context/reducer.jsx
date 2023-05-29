const sessionState = JSON.parse(sessionStorage.getItem("state"))


export const initialState = sessionState ? sessionState : {
    cart: []
}

function reducer(state, action) {
    console.log(state.cart)
    switch (action.type) {
        case "ADD_TO_CART":
            const newState = {
                ...state,
                cart: [...state.cart, action.coffee]
            };

            sessionStorage.setItem("state", JSON.stringify(newState));
            return newState

        default:
            return state;
    }
}






export default reducer;