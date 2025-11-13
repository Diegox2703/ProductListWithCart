import { DecrementBtn } from '../DecrementBtn'
import { IncrementBtn } from '../IncrementBtn'

export function QuantitySelector() {
  return (
    <button className="bg-Red text-Rose-50 px-3 py-2.5 flex justify-between items-center gap-2 rounded-4xl text-sm transition-colors w-40">
        <DecrementBtn/>
        <p>1</p>
        <IncrementBtn/>
    </button>
  )
}
