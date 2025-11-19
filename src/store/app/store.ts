import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import orderModal from '../features/orderModal/orderModalSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        orderModal: orderModal
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch