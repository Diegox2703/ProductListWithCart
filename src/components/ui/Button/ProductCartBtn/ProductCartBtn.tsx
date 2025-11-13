import { CartIcon } from '@/components/ui'

export function ProductCartBtn() {
  return (
    <button className="bg-Rose-50 text-Rose-900 outline outline-Rose-500 hover:text-Red px-7 hover:outline-Red py-2.5 flex justify-center gap-2 rounded-4xl text-sm cursor-pointer transition-colors w-40">
        <CartIcon/>
        Add to cart
    </button>
  )
}
