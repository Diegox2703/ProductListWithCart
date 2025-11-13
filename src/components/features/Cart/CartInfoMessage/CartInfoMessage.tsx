import { CarbonNeutralIcon } from '@/components/ui'

export function CartInfoMessage() {
  return (
    <section className="bg-Rose-50 rounded-lg flex items-center justify-center gap-1 p-5">
      <CarbonNeutralIcon/>
      <p className="text-Rose-900 text-sm font-normal">
        This is a <strong className="font-medium">carbon-neutral</strong> delivery
      </p>
    </section>
  )
}
