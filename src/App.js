import React, {useState, useEffect} from 'react'
import {getData} from './request/api'

const App = () => {
  const [loanData, setLoanData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData().then((resp) => {
        return resp
      })
      setLoanData(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      Test
    </div>
  )
}

export default App
