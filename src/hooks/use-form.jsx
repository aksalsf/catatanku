import { isTextInputHasValue, TITLE_LIMIT } from "@/utils"
import useTextInput from "@/hooks/use-text-input"
import { useContext } from "react"
import { FormContext } from "@/context"

function useForm () {
  const {
    value: title,
    onChange: handleOnChangeTitle,
    reset: resetTitle,
    count: titleCount
  } = useTextInput({
    limit: TITLE_LIMIT
  })

  const {
    value: content,
    onChange: handleOnChangeContent,
    reset: resetContent
  } = useTextInput({})

  const { setFormOpen, onSubmit } = useContext(FormContext)

  function handleOnSubmit (event) {
    event.preventDefault()

    if (!isTextInputHasValue(title) || !isTextInputHasValue(content)) {
      alert("Harap isi judul dan isi catatan.")
      return
    }

    if (typeof onSubmit === "function") {
      onSubmit({
        id: +Date.now(),
        title: title.trim(),
        body: content.trim(),
        createdAt: new Date().toISOString(),
        archived: false
      })

      setFormOpen(false)
      resetTitle()
      resetContent()
    }
  }

  return {
    title,
    titleCount,
    content,
    handleOnChangeTitle,
    handleOnChangeContent,
    handleOnSubmit
  }
}

export default useForm
