import handleCart from './handleCart'
import handleToken from './handleToken'
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
    handleToken,
})
export default rootReducers