import { useAppSelector } from '@/store'

export const useTotal = () => {
    const cart = useAppSelector(state => state.cart.items)

    const handleTotal = () => {
        let total = 0
        for(let item of cart) {
            total += item.total
        }
        return total.toFixed(2)
    }

    return { handleTotal }
}