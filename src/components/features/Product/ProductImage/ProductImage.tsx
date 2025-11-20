import type { ProductImageProps } from "./product-image.types";
import { imageContainer, productImageStyles } from "./product-image.styles";
import { useCart } from "@/hooks";

export function ProductImage({ image, name }: ProductImageProps) {
  const { productInCart } = useCart()
  const { isProductInCart } = productInCart(name)

  return (
    <section className={imageContainer({ isProductInCart })}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={ image.desktop }/>
          <source media="(min-width: 640px)" srcSet={ image.tablet }/>
          <img className={productImageStyles.image} src={ image.mobile } alt="product-image"/>
        </picture>
    </section>
  )
}