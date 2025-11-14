import { CartThumbnail } from '../CartThumbnail'
import type { CartDetailsProps } from './cart-details.types'

export function CartDetails({ isOrder }: CartDetailsProps) {
  return (
    <section className="flex gap-3">
        {
            isOrder && <CartThumbnail/>
        }
        <section className="flex flex-col justify-between gap-2">
            <h1 className="text-Rose-900 text-sm">Classic Tiramisu</h1>
            <section className="flex text-sm gap-4">
                <p className="text-Red">1x</p>
                <div className="flex gap-2">
                    <span className="text-Rose-400">@ $5.50</span>
                    {
                        !isOrder && <span className="text-Rose-500">$5.50</span>
                    }
                </div>
            </section>
        </section>
    </section>
  )
}
