import { CarbonNeutralIcon } from '@/components/ui'
import { cartInfoMessageStyles } from './cart-info-message.styles'

export function CartInfoMessage() {
  return (
    <section className={cartInfoMessageStyles.container}>
      <CarbonNeutralIcon/>
      <p className={cartInfoMessageStyles.infoMessage}>
        This is a <strong className={cartInfoMessageStyles.carbonNeutral}>carbon-neutral</strong> delivery
      </p>
    </section>
  )
}
