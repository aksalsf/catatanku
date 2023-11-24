import { useEffect } from "react"

function useAutosizeTextarea ({
  elementRefData,
  value
}) {
  useEffect(() => {
    if (elementRefData) {
      elementRefData.style.height = "auto"
      elementRefData.style.height = `${elementRefData.scrollHeight - 32}px`
    }
  }, [elementRefData, value])
}

export default useAutosizeTextarea
