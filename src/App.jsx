import "@/app.css"
import AppHeaderAction from "@/components/app-header-action"
import AppSection from "@/components/app-section"
import Button from "@/components/button"
import useCardList from "@/hooks/use-cardlist"
import NoteCard from "@/components/note-card"
import useToggle from "@/hooks/use-toggle"
import { FormContext } from "@/context"
import CreateNoteForm from "@/components/create-note-form"
import SearchForm from "@/components/search-form"

function App() {
  const {
    isActive: isFormOpen,
    setIsActive: setFormOpen,
    toggle: toggleForm
  } = useToggle(false)

  const {
    noteList,
    addNewNote,
    isShowArchive,
    toggleShowArchive,
    changeIsNoteArchived,
    searchNote,
    deleteNote
  } = useCardList()

  const appTitle = isShowArchive ? "Arsip Catatan" : "Catatanku"
  const archiveButtonText = isShowArchive ? "Sembunyikan Arsip" : "Lihat Arsip"

  return (
    <main className="app-container">
      <div className="app">
        <AppSection title={appTitle} variant="header">

          <AppHeaderAction>
            {!isFormOpen && (
              <Button
                text="Buat Catatan Baru"
                variant="primary"
                onClick={toggleForm}
              />
            )}
            <Button
              text={archiveButtonText}
              variant="secondary"
              onClick={toggleShowArchive}
            />
          </AppHeaderAction>
        </AppSection>

        <FormContext.Provider value={{
          setFormOpen,
          onSubmit: addNewNote
        }}>
          <AppSection title="Buat catatan baru" variant="section" hidden={!isFormOpen}>
            <CreateNoteForm />
          </AppSection>
        </FormContext.Provider>

        <AppSection title="Pencarian" variant="section" hidden={isFormOpen}>
          <SearchForm onSubmit={searchNote} />
        </AppSection>

        {noteList.length === 0 && (
          <AppSection title="Tidak ada catatan" variant="section" />
        )}

        {noteList.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            isArchived={note.archived}
            onArchive={() => changeIsNoteArchived(note.id, !note.archived)}
            onDelete={() => deleteNote(note.id)}
          />
        ))}
      </div>
    </main>
  )
}

export default App
