import { CartThumbnail } from '../CartThumbnail'
import { cartDetailsStyles } from './cart-details.styles'
import type { CartDetailsProps } from './cart-details.types'

export function CartDetails({ name, price, quantity, image, total, isOrder }: CartDetailsProps) {
  return (
    <section className={cartDetailsStyles.container}>
        { isOrder && <CartThumbnail thumbnail={image.thumbnail}/> }
        <section className={cartDetailsStyles.details}>
            <h1 className={cartDetailsStyles.name}>{ name }</h1>
            <section className={cartDetailsStyles.amountSection}>
                <p className={cartDetailsStyles.quantity}>x{ quantity }</p>
                <div className={cartDetailsStyles.priceSummary}>
                    <span className={cartDetailsStyles.price}>@ ${ price.toFixed(2) }</span>
                    { !isOrder && <span className={cartDetailsStyles.total}>${ total.toFixed(2) }</span> }
                </div>
            </section>
        </section>
    </section>
  )
}