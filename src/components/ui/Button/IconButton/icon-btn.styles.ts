import { cva } from "class-variance-authority";

export const iconBtnStyles = cva(
    'rounded-full size-4 flex justify-center items-center cursor-pointer border',
    {
        variants: {
            variant: {
                primary: 'border-white text-white hover:bg-white hover:text-Red',
                secondary: 'border-Rose-500 text-Rose-500 hover:border-Rose-900 hover:text-Rose-900'
            }
        },
        defaultVariants: {
            variant: 'primary'
        }
    }
)