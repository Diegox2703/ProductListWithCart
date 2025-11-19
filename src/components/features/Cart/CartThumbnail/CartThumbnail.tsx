import type { CartThumbnailProps } from "./cart-thumbnail.types";

export function CartThumbnail({ thumbnail }: CartThumbnailProps) {
  return (
    <section className="size-12 overflow-auto rounded-lg">
        <img className="size-full" src={ thumbnail } alt="cart-image" />
    </section>
  )
}