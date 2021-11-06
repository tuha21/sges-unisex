import { combineReducers } from "redux";
import isLogin from "./isLogin"
import profile from "./profile"
import categories from "./categories"
import categoryDetail from "./categoryDetail"
import paginate from "./paginate"
import catalogAction from "./catalogAction"
import productInfo from './guest/productInfor'
import cart from './guest/cart'
var myReducer = combineReducers({
    isLogin,
    profile,
    categories,
    categoryDetail,
    paginate,
    catalogAction,
    productInfo,
    cart
})

export default myReducer;
