import { useState } from "react"
import { getInitialData } from "@/utils"

function useData () {
  const [data, setData] = useState(getInitialData())

  function addNewData (newData) {
    setData((prevData) => [
      ...prevData,
      newData
    ])
  }

  function updateData (dataId, newData) {
    setData((prevData) => prevData.map((data) => {
      if (data.id === dataId) {
        return {
          ...data,
          ...newData
        }
      }
      return data
    }))
  }

  function deleteData (dataId) {
    setData((prevData) => prevData.filter((data) => data.id !== dataId))
  }

  return {
    data,
    addNewData,
    updateData,
    deleteData
  }
}

export default useData
