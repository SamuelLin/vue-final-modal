import type { CSSProperties, Component, Ref } from 'vue'
import type VueFinalModal from './components/VueFinalModal.vue'

export type ModalId = number | string | symbol
export type StyleValue = string | CSSProperties | (string | CSSProperties)[]

export interface UseModal {
  component?: Component
  attrs?: InstanceType<typeof VueFinalModal>['$props']
  slots?: {
    default?: string | {
      component: any
      attrs?: any
    }
  }

  id?: Symbol
  modelValue?: boolean
  rejectOpen?: (reason?: string) => void
  resolveOpened?: () => void
  rejectClose?: (reason?: string) => void
  resolveClosed?: () => void
}

export interface Modal {
  modalId?: ModalId
  hideOverlay: Ref<boolean | undefined> | undefined
  overlayVisible: Ref<boolean>
  focus: () => void
  toggle: (show?: boolean) => Promise<string>
}