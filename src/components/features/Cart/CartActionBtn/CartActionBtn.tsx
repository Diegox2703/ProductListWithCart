import { RemoveBtn } from '@/components/ui'
import { useCart } from '@/hooks'
import type { CartActionBtnProps } from './cart-action-btn.types'

export function CartActionBtn({ isOrder, total, name }: CartActionBtnProps) {
  const { deleteCartItemFn } = useCart()

  return (
    <section>
        {
            isOrder 
            ? <span className="text-Rose-900">${ total.toFixed(2) }</span>
            : <RemoveBtn removeFn={() => deleteCartItemFn(name)}/>
        }
    </section>
  )
}
