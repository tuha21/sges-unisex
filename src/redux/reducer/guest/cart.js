import _ from "lodash"
const init = [];


const reducer = (state = init, action) => {
    switch (action.type) {
        case 'set_cart': {
            return action.cart
        }
        case 'add_cart': {
            var check = false;
            _.forEach(state, val => {
                if (val.id === action.cartItem.id && val.size === action.cartItem.size && val.color === action.cartItem.color) {
                    check = true;
                    return;
                }
            })
            if (check) {
                return [...state].map(val => {
                    return val.id === action.cartItem.id && val.size === action.cartItem.size && val.color === action.cartItem.color ?
                        { ...val, qty: Number(val.qty) + 1 } : val
                })
            }
            else return [...state, action.cartItem]
        }
        case 'update_cart': {
            return [...state].map(val => {
                return val.id === action.cartItem.id && val.size === action.cartItem.size && val.color === action.cartItem.color? 
                action.cartItem : val
            })
        }
        case 'remove_cart': {
            return [...state].filter(val => {
                return val.id !== action.id
            })
        }
        default: return state
    }
}

export default reducer