import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { PRODUCT } from '@/constants'
import { cartAdapter } from '@/adapters'
import type { CartSliceState } from './cart-slice.types'
import type { ProductId, QuantityActions } from '@/types'

const initialState: CartSliceState = {
    items: []
} 

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        createCartItem: (state, action: PayloadAction<ProductId>) => {
            const product = PRODUCT.find(product => product.id === action.payload)
            if (product) return {...state, items: [...state.items, cartAdapter(product)]}
        },
        deleteCartItem: (state, action: PayloadAction<ProductId>) => {
            const newCart = state.items.filter(cart => cart.id !== action.payload)
            return {...state, items: newCart}
        },
        handleQuantity: ( state, action: PayloadAction<QuantityActions>) => {
            const cart = state.items.find(item => item.id === action.payload.id)
            if (cart) {
                if (action.payload.action === 'increment') cart.quantity += 1
                if (action.payload.action === 'decrement' && cart.quantity > 1) cart.quantity -= 1

                cart.total = cart.quantity * cart.price
                return state
            }
        },
        resetCart: (state) => ({...state, items: []})
    }
})

export const { 
    createCartItem, 
    deleteCartItem, 
    handleQuantity, 
    resetCart 
} = cartSlice.actions

export default cartSlice.reducer
