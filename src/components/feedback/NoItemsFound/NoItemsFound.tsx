import { EmptyCartIcon } from '@/components/ui'

export function NoItemsFound() {
  return (
    <article className="flex flex-col items-center justify-center gap-5 p-5">
      <EmptyCartIcon/>
      <h1 className="text-Rose-500 font-bold">Your added items will appear here</h1>
    </article>
  )
}
