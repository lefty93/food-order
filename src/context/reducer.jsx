const sessionState = JSON.parse(localStorage.getItem("state"))


export const initialState = sessionState ? sessionState : {
    cart: []
}

function reducer(state, action) {
    console.log("Current state:", state.cart);
    console.log("Action:", action);

    switch (action.type) {
        case "ADD_TO_CART":
            const existingItemIndex = state.cart.findIndex(
                (item) => item.id === action.coffee.id
            );
            if (existingItemIndex !== -1) {
                const updatedCart = state.cart.map((item, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...item,
                            count: item.count + 1
                        };
                    }
                    return item;
                });
                const updatedState = {
                    ...state,
                    cart: updatedCart
                };
                localStorage.setItem("state", JSON.stringify(updatedState)); // Save updated state to localStorage
                return updatedState;
            } else {
                const newItem = {
                    ...action.coffee,
                    count: 1
                };
                const updatedState = {
                    ...state,
                    cart: [...state.cart, newItem]
                };
                localStorage.setItem("state", JSON.stringify(updatedState)); // Save updated state to localStorage
                return updatedState;
            }

        default:
            return state;
    }
}

export default reducer;

// TODO REMOVE_FROM_CART

// const newState = JSON.parse(JSON.stringify(state));
// console.log("New state:", newState.cart);
// localStorage.setItem("state", JSON.stringify(newState));
// return newState