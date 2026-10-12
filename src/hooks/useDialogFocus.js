import { useEffect } from 'react'

export default function useDialogFocus(ref, onClose) {
  useEffect(() => {
    const previous = document.activeElement
    const previousOverflow = document.body.style.overflow
    const dialog = ref.current
    const focusables = () => [...dialog.querySelectorAll('button:not([disabled]), a[href], input, select, textarea, [tabindex="0"]')]
    focusables()[0]?.focus()
    const keydown = event => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const items = focusables()
      const first = items[0], last = items.at(-1)
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) { event.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', keydown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', keydown); document.body.style.overflow = previousOverflow; previous?.focus() }
  }, [ref, onClose])
}
