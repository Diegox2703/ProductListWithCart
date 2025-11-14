import { StartNewOrderBtn } from '@/components/ui'
import { useDisableScroll } from '@/hooks'
import { OrderHeader } from './OrderHeader'
import { OrderSummary } from './OrderSummary'

export function OrderConfirmationModal() {
  useDisableScroll()

  return (
    <div className="fixed top-0 left-0 bg-neutral-800/40 w-full h-full flex items-center justify-center px-3">
        <div className="bg-white w-full max-w-[500px] h-fit rounded-lg p-8 flex flex-col gap-5">
          <OrderHeader/>
          <OrderSummary/>
          <StartNewOrderBtn/>
        </div>
    </div>
  )
}
