import { RemoveBtn } from '@/components/ui'
import type { CartActionBtnProps } from './cart-action-btn.types'

export function CartActionBtn({ isOrder, total }: CartActionBtnProps) {
  return (
    <section>
        {
            isOrder 
            ? <span className="text-Rose-900">${ total.toFixed(2) }</span>
            : <RemoveBtn/>
        }
    </section>
  )
}
