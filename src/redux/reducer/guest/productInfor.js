const init = {
    "id": 1,
    "name": "product01",
    "image": "image01",
    "description": "des01",
    "created": 1609434000000,
    "view": 1,
    "status": 1,
    "sale": 10,
    "subCate": {
        "id": 1,
        "name": "subcate1",
        "supCate": {
            "id": 1,
            "name": "supcate1"
        }
    },
    "price": 200000.0
}

const reducer = (state = init, action) => {
    switch(action.type) {
        case 'set' : {
            return action.product
        }
        default: return state
    }
}

export default reducer