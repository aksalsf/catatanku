import { useCallback, useState } from "react"

function useTextInput ({
  defaultValue = "",
  limit = 0
}) {
  const [value, setValue] = useState(defaultValue)

  const count = value.length

  const onChange = useCallback((e) => {
    const { value } = e.target
    if (limit > 0 && value.length > limit) return
    setValue(value)
  }, [limit])

  const reset = useCallback(() => {
    setValue(defaultValue)
  }, [defaultValue])

  return {
    value,
    count,
    reset,
    onChange
  }
}

export default useTextInput
