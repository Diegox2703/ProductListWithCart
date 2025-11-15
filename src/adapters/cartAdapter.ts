import type { Cart, Product } from "@/types";

export const cartAdapter = (product: Product): Cart => ({
    name: product.name,
    price: product.price,
    image: {
        thumbnail: product.image.thumbnail
    },
    quantity: 1,
    total: product.price
})