import { cartThumbnailStyles } from "./cart-thumbnail.styles";
import type { CartThumbnailProps } from "./cart-thumbnail.types";

export function CartThumbnail({ thumbnail }: CartThumbnailProps) {
  return (
    <section className={cartThumbnailStyles.container}>
        <img className={cartThumbnailStyles.thumbnail} src={ thumbnail } alt="cart-image" />
    </section>
  )
}