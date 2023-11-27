import { useEffect, useState } from "react"

function useData () {
  const localStorageData = JSON.parse(localStorage.getItem("data")) || []
  const [data, setData] = useState(localStorageData)

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

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  return {
    data,
    addNewData,
    updateData,
    deleteData
  }
}

export default useData
