import { ProductCartBtn, QuantitySelector } from '@/components/ui'

export function ProductActionsBtns() {
  const active = true 

  return (
    <section className="absolute bottom-18 w-full flex justify-center">
        {
            active
            ? <ProductCartBtn/>
            : <QuantitySelector/>
        }
    </section>
  )
}
