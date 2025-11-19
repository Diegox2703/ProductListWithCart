import { useTotal } from '@/hooks'

export function CartTotal() {
  const { handleTotal } = useTotal()

  return (
    <section className="text-Rose-900 flex items-center justify-between">
        <p className="text-sm font-normal">Order Total</p>
        <p className="text-xl font-bold">${handleTotal()}</p>
    </section>
  )
}
