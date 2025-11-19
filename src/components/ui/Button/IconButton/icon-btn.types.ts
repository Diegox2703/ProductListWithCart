import type { Variants } from '@/types'

export interface IconBtnProps {
    children: React.ReactNode
    variant?: Variants
    onClick?: () => void
}