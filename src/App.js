import React, { useState, useEffect } from 'react'
import { getData } from './request/api'
import { LoanTable } from './components/LoanTable'

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

console.log('loanData', loanData)

  return (
    <div>
      <LoanTable data={loanData} />
    </div>
  )
}

export default App
