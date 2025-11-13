import { CartTotal } from '@/components/features'
import { OrderConfirmedIcon, StartNewOrderBtn } from '@/components/ui'
import { OrderList } from '../OrderList'
import { useDisableScroll } from '@/hooks'

export function OrderConfirmationModal() {
  useDisableScroll()

  return (
    <div className="fixed top-0 left-0 bg-neutral-800/40 w-full h-full flex items-center justify-center px-3">
        <div className="bg-white w-full max-w-[500px] h-fit rounded-lg p-8 flex flex-col gap-5">
          <section>
            <OrderConfirmedIcon/>
          </section>
          <section>
            <h1 className="text-Rose-900 text-3xl font-bold">Order Confirmed</h1>
            <span className="text-sm text-Rose-400">We hope you enjoy your food</span>
          </section>
          <section className="flex flex-col gap-5 bg-Rose-50 rounded-lg p-6">
            <OrderList/>
            <CartTotal/>
          </section>
          <StartNewOrderBtn/>
        </div>
    </div>
  )
}
