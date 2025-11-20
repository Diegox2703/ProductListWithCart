import { cva } from "class-variance-authority"

export const productImageStyles = {
    image: 'size-full object-cover'
}

export const imageContainer = cva(
    'aspect-4/3 sm:aspect-square rounded-lg overflow-auto border-3',
    {
        variants: {
            isProductInCart: {
                true: 'border-Red',
                false: 'border-transparent'
            }
        },
        defaultVariants: {
            isProductInCart: false
        }
    }
)