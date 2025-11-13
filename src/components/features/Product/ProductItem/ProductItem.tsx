import { ProductCartBtn, QuantitySelector } from '@/components/ui'
import { useState } from 'react'

export function ProductItem() {
  const [active] = useState(true)

  return (
    <article className="flex flex-col gap-5 relative">
      <section className="aspect-4/4 rounded-lg overflow-auto">
        <img className="w-full h-full" src="/images/image-baklava-desktop.jpg" alt="product-image"/>
      </section>
      <section className="absolute bottom-18 w-full flex justify-center">
        {
          active
          ? <ProductCartBtn/>
          : <QuantitySelector/>
        }
      </section>
      <section>
        <span className="text-Rose-400 text-xs font-normal">Baklava</span>
        <h1 className="text-Rose-900">Pistachio Baklava</h1>
        <p className="text-Red">$4.00</p>
      </section>
    </article>
  )
}
