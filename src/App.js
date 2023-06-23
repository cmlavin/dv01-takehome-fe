import React, { useState, useEffect } from 'react'
import {
  Box,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import { getData } from './request/api'
import { LoanTable } from './components/LoanTable'
import { Dropdown } from './common/Dropdown'

const homeOwnershipEnum = {
  'RENT': 'Rent',
  'OWN': 'Own',
  'MORTGAGE': 'Mortgage',
}

const App = () => {
  const [loanData, setLoanData] = useState([])
  const [homeOwnership, setHomeOwnership] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData().then((resp) => {
        return resp
      })
      setLoanData(data)
    }
    fetchData()
  }, [])

  const handleHomeOwnershipChange = (event) => {
    setHomeOwnership(event.target.value)
  }

  return (
    <div>
      <LoanTable data={loanData} homeOwnership={homeOwnership} />
      <div>
        <Dropdown label="Home Ownership" options={homeOwnershipEnum} 
          value={homeOwnership} handleChange={handleHomeOwnershipChange} />
      </div>
    </div>
  )
}

export default App
