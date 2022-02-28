import { combineReducers } from "redux";
import { productReducer } from './productRedux';
import { formReducer } from './FormRedux';
import { buyerReducer } from './BuyerRedux';
import { saleCheckReducer } from "./saleCheckRedux";

const reducers = combineReducers({
    pro: productReducer,
    form: formReducer,
    buyerState: buyerReducer,
    saleCheck: saleCheckReducer
}) 

export default reducers

export type rootState = ReturnType<typeof reducers> 