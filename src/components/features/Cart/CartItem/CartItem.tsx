import { RemoveBtn } from '@/components/ui'
import type { CartItemProps } from './cart-item.types'

export function CartItem({ isOrder }: CartItemProps) {

  return (
    <article className="flex items-center justify-between border-b border-Rose-100 pb-5">
        <section className="flex gap-3">
            {
                isOrder &&
                <section className="size-12 overflow-auto rounded-lg">
                    <img className="size-full" src="/images/image-tiramisu-thumbnail.jpg" alt="cart-image" />
                </section>
            }
            <section className="flex flex-col justify-between gap-2">
                <h1 className="text-Rose-900 text-sm">Classic Tiramisu</h1>
                <section className="flex text-sm gap-4">
                    <p className="text-Red">1x</p>
                    <div className="flex gap-2">
                        <span className="text-Rose-400">@ $5.50</span>
                        {
                            !isOrder &&
                            <span className="text-Rose-500">$5.50</span>
                        }
                    </div>
                </section>
            </section>
        </section>
        <section>
            {
                isOrder 
                ? <span className="text-Rose-900">$5.50</span>
                : <RemoveBtn/>
            }
        </section>
    </article>
  )
}
