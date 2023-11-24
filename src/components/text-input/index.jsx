import { useRef } from "react"
import PropTypes from "prop-types"
import useAutosizeTextarea from "@/hooks/use-autosize-textarea"

function TextInput ({
  name,
  onChange,
  value,
  placeholder,
  isTextArea,
  ...props
}) {
  const textAreaRef = useRef(null)
  useAutosizeTextarea({ elementRefData: textAreaRef.current, value })

  if (isTextArea) {
    return (
      <textarea
        {...props}
        ref={textAreaRef}
        id={name}
        name={name}
        rows={4}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    )
  }

  if (!isTextArea) {
    return (
      <input
        {...props}
        type="text"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    )
  }

  return null
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isTextArea: PropTypes.bool
}

TextInput.defaultProps = {
  isTextArea: false
}

export default TextInput
