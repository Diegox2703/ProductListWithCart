import { RemoveBtn } from '@/components/ui'
import type { CartActionBtnProps } from './cart-action-btn.types'
import { useAppDispatch } from '@/store'
import { deleteCartItem } from '@/store/features'

export function CartActionBtn({ isOrder, total, name }: CartActionBtnProps) {
  const dispatch = useAppDispatch()

  return (
    <section>
        {
            isOrder 
            ? <span className="text-Rose-900">${ total.toFixed(2) }</span>
            : <RemoveBtn removeFn={() => dispatch(deleteCartItem(name))}/>
        }
    </section>
  )
}
