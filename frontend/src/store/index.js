import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducers,productDetailsReducers } from '../reducers/productReducers'
import { cartReducer } from '../reducers/cartReducers'
import { userLoginReducers } from '../reducers/userReducers'
import { userRegisterReducers,userDetailsReducers,userUpdateProfileReducers } from '../reducers/userReducers'
const reducer=combineReducers({
    productList:productListReducers,
    productDetails:productDetailsReducers,
    cart: cartReducer,
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
    userDetails:userDetailsReducers,
    userUpdateProfile:userUpdateProfileReducers,
    cart:cartReducer
})
const userInfoFormStorage=localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem('userInfo')):null
const initialState ={
    userLogin:{userInfo:userInfoFormStorage}
}
const middleware =[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store