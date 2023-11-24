import { useEffect, useState } from "react"
import { DELETE_NOTE_CONFIRMATION, isTextInputHasValue } from "@/utils"
import useToggle from "@/hooks/use-toggle"
import useData from "@/hooks/use-data"

function useCardList () {
  const {
    data,
    addNewData: addNewNote,
    updateData,
    deleteData
  } = useData()

  const {
    isActive: isShowArchive,
    toggle: toggleShowArchive
  } = useToggle(false)

  const [noteList, setNoteList] = useState(data)

  function changeIsNoteArchived (noteId) {
    updateData(noteId, {
      archived: !noteList.find((note) => note.id === noteId).archived
    })
  }

  // Sort noteList by createdAt
  function sortNoteList (noteList) {
    return [...noteList].sort((a, b) => {
      const dateA = new Date(a.createdAt)
      const dateB = new Date(b.createdAt)
      return dateB - dateA
    })
  }

  function filterArchivedNote (note) {
    return note.archived === isShowArchive
  }

  function searchNote (searchQuery) {
    if (!isTextInputHasValue(searchQuery)) {
      setNoteList(
        sortNoteList(data)
          .filter(filterArchivedNote)
      )
      return
    }

    setNoteList((prevNoteList) => prevNoteList.filter((note) => {
      const noteTitle = note.title.toLowerCase()
      const noteBody = note.body.toLowerCase()
      const query = searchQuery.toLowerCase()
      return noteTitle.includes(query) || noteBody.includes(query)
    }))
  }

  function deleteNote (noteId) {
    if (window.confirm(DELETE_NOTE_CONFIRMATION)) {
      deleteData(noteId)
    }
  }

  useEffect(() => {
    setNoteList(data)
  }, [data])

  useEffect(() => {
    setNoteList(
      (prevNoteList) => sortNoteList(prevNoteList)
        .filter(filterArchivedNote)
    )
  }, [data, isShowArchive])

  return {
    noteList,
    isShowArchive,
    toggleShowArchive,
    searchNote,
    addNewNote,
    changeIsNoteArchived,
    deleteNote
  }
}

export default useCardList
