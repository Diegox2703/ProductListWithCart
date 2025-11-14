import { OrderConfirmedIcon } from '@/components/ui'

export function OrderHeader() {
  return (
    <>
        <section>
            <OrderConfirmedIcon/>
        </section>
        <section>
            <h1 className="text-Rose-900 text-3xl font-bold">Order Confirmed</h1>
            <span className="text-sm text-Rose-400">We hope you enjoy your food</span>
        </section>
    </>
  )
}
