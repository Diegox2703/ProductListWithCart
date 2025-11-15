import type { ProductImageProps } from "./product-image.types";

export function ProductImage({ image }: ProductImageProps) {
  return (
    <section className="aspect-4/4 rounded-lg overflow-auto">
        <img className="w-full h-full" src={ image.desktop } alt="product-image"/>
    </section>
  )
}
