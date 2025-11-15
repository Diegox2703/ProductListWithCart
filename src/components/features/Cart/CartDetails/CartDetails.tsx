import { CartThumbnail } from '../CartThumbnail'
import type { CartDetailsProps } from './cart-details.types'

export function CartDetails({ name, price, quantity, image, total, isOrder }: CartDetailsProps) {
  return (
    <section className="flex gap-3">
        { isOrder && <CartThumbnail image={image}/> }
        <section className="flex flex-col justify-between gap-2">
            <h1 className="text-Rose-900 text-sm">{ name }</h1>
            <section className="flex text-sm gap-4">
                <p className="text-Red">x{ quantity }</p>
                <div className="flex gap-2">
                    <span className="text-Rose-400">@ ${ price.toFixed(2) }</span>
                    { !isOrder && <span className="text-Rose-500">${ total.toFixed(2) }</span> }
                </div>
            </section>
        </section>
    </section>
  )
}