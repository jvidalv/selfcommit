import { FormEvent, useCallback, useRef, useState } from 'react'

const useForm = (
  apiEndpoint: 'email' | 'linkedin' | 'contact' | 'newsletter'
) => {
  const form = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      setLoading(true)
      const data = new FormData(form.current!)
      const res = await fetch(`/api/${apiEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...Object.fromEntries(data)
        })
      })
      if (!res.ok) {
        setLoading(false)

        // handle error
        return
      }
      setSuccess(true)
      setLoading(false)
    },
    [apiEndpoint]
  )

  return {
    form,
    success,
    loading,
    onSubmit
  }
}

export default useForm
