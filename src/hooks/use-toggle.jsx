import { useCallback, useState } from "react"

function useToggle (initialValue = false) {
  const [isActive, setIsActive] = useState(initialValue)
  const toggle = useCallback(() => setIsActive((prevIsActive) => !prevIsActive), [])

  return {
    isActive,
    setIsActive,
    toggle
  }
}

export default useToggle
