import { EmptyCartIcon } from '@/components/ui'
import { noItemsFoundStyles } from './no-items-found.styles'

export function NoItemsFound() {
  return (
    <article className={noItemsFoundStyles.container}>
      <EmptyCartIcon/>
      <h1 className={noItemsFoundStyles.text}>Your added items will appear here</h1>
    </article>
  )
}
