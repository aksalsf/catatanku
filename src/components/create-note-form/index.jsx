import FormGroup from "@/components/form-group"
import TextInput from "@/components/text-input"
import TextInputCharacterCounter from "@/components/text-input-character-counter"
import Button from "@/components/button"
import Form from "@/components/form"
import useForm from "@/hooks/use-form"
import { TITLE_LIMIT } from "@/utils"

function CreateNoteForm () {
  const {
    title,
    titleCount,
    content,
    handleOnChangeTitle,
    handleOnChangeContent,
    handleOnSubmit
  } = useForm()

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup label="Judul" name="title">
        <TextInput
          onChange={handleOnChangeTitle}
          name="title"
          value={title}
          required
        />
        <TextInputCharacterCounter
          count={titleCount}
          limit={TITLE_LIMIT}
        />
      </FormGroup>
      <FormGroup label="Isi" name="content">
        <TextInput
          onChange={handleOnChangeContent}
          name="content"
          value={content}
          isTextArea
          required
        />
      </FormGroup>
      <FormGroup>
        <Button text="Buat" variant="primary" />
      </FormGroup>
    </Form>
  )
}

export default CreateNoteForm
