import { ProductCartBtn, QuantitySelector } from '@/components/ui'
import { createCartItem, useAppDispatch } from '@/store'
import type { ProductActionsBtnsProps } from './product-actions-btns.types'

export function ProductActionsBtns({ name }: ProductActionsBtnsProps) {
  const dispatch = useAppDispatch()
  const active = false 

  return (
    <section className="absolute bottom-18 w-full flex justify-center">
        {
            active
            ? <QuantitySelector/>
            : <ProductCartBtn createCartBtn={() => dispatch(createCartItem(name))}/>
        }
    </section>
  )
}