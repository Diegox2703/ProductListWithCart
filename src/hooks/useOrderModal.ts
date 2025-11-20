import { useAppDispatch } from '@/store'
import { toggleModal } from '@/store/features'

export const useOrderModal = () => {
    const dispatch = useAppDispatch()

    const toggleModalFn = () => {
        dispatch(toggleModal())
    }

    return { toggleModalFn }
}