import type { QuantityActions } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store'
import { 
    createCartItem, 
    deleteCartItem, 
    handleQuantity, 
    resetCart, 
    toggleModal 
} from '@/store/features'

export const useCart = () => {
    const cartItems = useAppSelector(store => store.cart.items)
    const dispatch = useAppDispatch()

    const createCartItemFn = (name: string) => {
        dispatch(createCartItem(name))
    }

    const deleteCartItemFn = (name: string) => {
        dispatch(deleteCartItem(name))
    }

    const handleQuantityFn = (action: QuantityActions) => {
        dispatch(handleQuantity(action))
    }

    const resetCartFn = () => {
        dispatch(toggleModal())
        dispatch(resetCart())
    }

    const handleTotalItems = () => {
        let total = 0
        for(let item of cartItems) {
            total += item.quantity
        }

        return total
    }

    const handleTotal = () => {
        let total = 0
        for(let item of cartItems) {
            total += item.total
        }
        return total.toFixed(2)
    }

    const productInCart = (name: string) => {
        const isProductInCart = cartItems.some(item => item.name === name)
        const cart = cartItems.find(item => item.name === name)
        const quantity = cart?.quantity

        return { isProductInCart, quantity }
    }

    return {
        createCartItemFn,
        deleteCartItemFn,
        handleQuantityFn,
        resetCartFn,
        handleTotalItems,
        handleTotal,
        productInCart,
        cartItems
    }
}