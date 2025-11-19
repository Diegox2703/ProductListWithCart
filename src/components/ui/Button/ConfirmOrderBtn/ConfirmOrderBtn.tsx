import { BaseButton } from "../BaseButton";
import type { ConfirmOrderBtnProps } from "./confirm-order-btn.types";

export function ConfirmOrderBtn({ openModal }: ConfirmOrderBtnProps) {
  return (
    <BaseButton onClick={openModal}>
        Confirm Order
    </BaseButton>
  )
}
