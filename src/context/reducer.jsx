const sessionState = JSON.parse(localStorage.getItem("state"))


export const initialState = sessionState ? sessionState : {
    cart: []
}

function reducer(state, action) {
    console.log("Current state:", state.cart);
    console.log("Action:", action);
    switch (action.type) {
        case "ADD_TO_CART":
            // const newState = {
            //     ...state,
            //     cart: [...state.cart, action.coffee]
            // };
            const existingItemIndex = state.cart.findIndex(
                (item) => item.id === action.coffee.id
            );
            if (existingItemIndex !== -1) {
                const updatedCart = state.cart.map((item, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...item,
                            count: item.count + 1,
                        };
                    }
                    return item;
                });
                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                const newItem = {
                    ...action.coffee,
                    count: 1,
                };
                return {
                    ...state,
                    cart: [...state.cart, newItem],
                };
            }
        default:
            return state;
    }
};

export default reducer;

// const newState = JSON.parse(JSON.stringify(state));
// console.log("New state:", newState.cart);
// localStorage.setItem("state", JSON.stringify(newState));
// return newState