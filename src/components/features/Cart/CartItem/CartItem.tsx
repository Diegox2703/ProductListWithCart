import { RemoveBtn } from '@/components/ui'

export function CartItem() {
  return (
    <article className="flex items-center justify-between border-b border-Rose-100 pb-5">
        <section className="flex flex-col gap-2">
            <h1 className="text-Rose-900 text-sm">Classic Tiramisu</h1>
            <section className="flex text-sm gap-4">
                <p className="text-Red">1x</p>
                <div className="flex gap-2">
                    <span className="text-Rose-400">@ $5.50</span>
                    <span className="text-Rose-500">$5.50</span>
                </div>
            </section>
        </section>
        <section>
            <RemoveBtn/>
        </section>
    </article>
  )
}
