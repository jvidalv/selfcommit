import { useEffect, useState } from 'react'

export type Status = 'idle' | 'loading' | 'ready' | 'error'
export type ScriptElt = HTMLScriptElement | null

function useScript(id: string, content: string | `https://${string}`): Status {
  const [status, setStatus] = useState<Status>(content ? 'loading' : 'idle')

  useEffect(
    () => {
      if (!content) {
        setStatus('idle')
        return
      }

      // Fetch existing script element by src
      // It may have been added by another instance of this hook
      let script: ScriptElt = document.querySelector(`script[id="${id}"]`)

      if (!script) {
        // Create script
        script = document.createElement('script')
        script.id = id
        script.async = true
        if (content.startsWith('https://')) {
          script.src = content
        } else {
          script.innerHTML = content
        }
        script.setAttribute('data-status', 'loading')
        // Add script to document body
        document.body.appendChild(script)

        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event: Event) => {
          script?.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error'
          )
        }

        script.addEventListener('load', setAttributeFromEvent)
        script.addEventListener('error', setAttributeFromEvent)
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute('data-status') as Status)
      }

      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event: Event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error')
      }

      // Add event listeners
      script.addEventListener('load', setStateFromEvent)
      script.addEventListener('error', setStateFromEvent)

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener('load', setStateFromEvent)
          script.removeEventListener('error', setStateFromEvent)
        }
      }
    },
    [content] // Only re-run effect if script src changes
  )

  return status
}

export default useScript
