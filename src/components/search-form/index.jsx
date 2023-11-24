import PropTypes from "prop-types"
import FormGroup from "@/components/form-group"
import TextInput from "@/components/text-input"
import Button from "@/components/button"
import Form from "@/components/form"
import useTextInput from "@/hooks/use-text-input"

function SearchForm ({
  onSubmit
}) {
  const {
    value,
    onChange
  } = useTextInput({
    defaultValue: ""
  })

  function handleOnSubmit (event) {
    event.preventDefault()

    if (typeof onSubmit === "function") {
      onSubmit(value.trim())
    }
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <TextInput
          onChange={onChange}
          name="search"
          value={value}
        />
      </FormGroup>
      <FormGroup>
        <Button
          text="Cari"
          variant="primary"
          type="submit"
        />
      </FormGroup>
    </Form>
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func
}

export default SearchForm
