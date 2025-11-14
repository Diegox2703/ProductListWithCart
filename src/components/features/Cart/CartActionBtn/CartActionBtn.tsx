import { RemoveBtn } from '@/components/ui'
import type { CartActionBtnProps } from './cart-action-btn.types'

export function CartActionBtn({ isOrder }: CartActionBtnProps) {
  return (
    <section>
        {
            isOrder 
            ? <span className="text-Rose-900">$5.50</span>
            : <RemoveBtn/>
        }
    </section>
  )
}
