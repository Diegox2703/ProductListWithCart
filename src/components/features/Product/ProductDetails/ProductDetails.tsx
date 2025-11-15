import type { ProductDetailsProps } from "./product-details.types";

export function ProductDetails({ name, category, price }: ProductDetailsProps) {
  return (
    <section>
        <span className="text-Rose-400 text-xs font-normal">{ category }</span>
        <h1 className="text-Rose-900">{ name }</h1>
        <p className="text-Red">${ price.toFixed(2) }</p>
    </section>
  )
}