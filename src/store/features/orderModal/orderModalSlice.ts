import { createSlice } from '@reduxjs/toolkit'
import type { OrderModalSlice } from './order-modal-slice.types'

const initialState: OrderModalSlice = {
    isOpen: false
}

const orderModalSlice = createSlice({
    name: 'orderModal',
    initialState: initialState,
    reducers: {
        toggleModal: (state) => ({ ...state, isOpen: !state.isOpen })
    }
})

export const { toggleModal } = orderModalSlice.actions
export default orderModalSlice.reducer