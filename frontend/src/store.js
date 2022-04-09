import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailsReducer, productListReducer } from './Reducers/product.reduces'
import { cartReducer } from './Reducers/cart.reducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpadateProfileReducer } from './Reducers/user.reducers'
import { orderCreateReducer } from './Reducers/order.reducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpadateProfileReducer,
    orderCreate: orderCreateReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const shippingAddressFromStronge = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

const initialstate = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: {
        userInfo: userInfoFromStorage,
        shippingAddress: shippingAddressFromStronge
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store