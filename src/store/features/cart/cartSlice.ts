import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { PRODUCT } from '@/constants'
import { cartAdapter } from '@/adapters'
import type { CartSliceState } from './cart-slice.types'

const initialState: CartSliceState = {
    items: []
} 

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        createCartItem: (state, action: PayloadAction<string>) => {
            const product = PRODUCT.find(product => product.name === action.payload)
            if (product) return {...state, items: [...state.items, cartAdapter(product)]}
        }
    }
})

export const { createCartItem } = cartSlice.actions

export default cartSlice.reducer
