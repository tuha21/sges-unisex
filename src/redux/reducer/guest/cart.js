const init = [];
const reducer = (state = init, action) => {
    switch(action.type) {
        case 'set' : {
            return action.cart
        }
        case 'add' : {
            return [...state, action.cartItem]
        }
        case 'remove' : {
            return [...state].filter(val => {
                return val.id !== action.id
            })
        }
        default: return state
    }
}

export default reducer