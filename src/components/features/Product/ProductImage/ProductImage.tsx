import { useAppSelector } from "@/store";
import type { ProductImageProps } from "./product-image.types";

export function ProductImage({ image, name }: ProductImageProps) {
  const cart = useAppSelector(state => state.cart)

  const isProductInCart = cart.items.some(item => item.name === name)

  return (
    <section className={`aspect-4/3 sm:aspect-square rounded-lg overflow-auto border-3 ${isProductInCart ? 'border-Red' : 'border-transparent'}`}>
        <picture className="size-full">
          <source media="(min-width: 1024px)" srcSet={ image.desktop }/>
          <source media="(min-width: 640px)" srcSet={ image.tablet }/>
          <img className="size-full object-cover" src={ image.mobile } alt="product-image"/>
        </picture>
    </section>
  )
}