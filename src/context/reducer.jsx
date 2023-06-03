const sessionState = JSON.parse(localStorage.getItem("state"))


export const initialState = sessionState ? sessionState : {
    cart: []
}

export const getCartTotalAndDeliveryFee = (cart) => {
    const cartItems = cart?.reduce((amount, item) => item.price * item.count + amount, 0);
    let deliveryFee = 0;

    if (cartItems > 100) {
        deliveryFee = 0; // No delivery fee for cart total above 100
    } else if (cartItems > 30) {
        deliveryFee = 3; // Delivery fee of 3 for cart total above 30
    } else if (cartItems > 10) {
        deliveryFee = 5; // Delivery fee of 5 for cart total above 10
    }

    return {
        cartItems: cartItems,
        deliveryFee: deliveryFee,
        cartTotal: cartItems + deliveryFee
    };
};


export const increaseCount = (id) => {
    return {
        type: "INCREASE_COUNT",
        id
    };
};

export const decreaseCount = (id) => {
    return {
        type: "DECREASE_COUNT",
        id
    };
};

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

        case "REMOVE_FROM_CART":
            const updatedCart = state.cart.filter((item) => item.id !== action.id);
            if (updatedCart.length === state.cart.length) {
                console.warn(`Can't remove product ${action.id}`);
                return state;
            }
            const updatedState = {
                ...state,
                cart: updatedCart
            };
            localStorage.setItem("state", JSON.stringify(updatedState));
            return updatedState;
        
        case "INCREASE_COUNT":
            const increasedCart = state.cart.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        count: item.count + 1
                    };
                }
                return item;
            });
            const increasedState = {
                ...state,
                cart: increasedCart
            };
            localStorage.setItem("state", JSON.stringify(increasedState));
            return increasedState;

        case "DECREASE_COUNT":
            const decreasedCart = state.cart.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        count: Math.max(item.count - 1, 1) // Ensure count doesn't go below 1
                    };
                }
                return item;
            });
            const decreasedState = {
                ...state,
                cart: decreasedCart
            };
            localStorage.setItem("state", JSON.stringify(decreasedState));
            return decreasedState;

    }
}

export default reducer;
