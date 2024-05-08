const stateCart = {
    cart: [
        {
            product_cd: "SP001",
            product_name: "iPhone 13 Pro",
            image_url: "https://example.com/iphone13pro.jpg",
            price: 1099.99,
            quantity: 1
        }
    ]
}

export const cartReducer = (state = stateCart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let cart = [...state.cart];
            const index = cart.findIndex(prod => prod.product_cd === action.productAdded)
        }
    }
    return { ...state }
}