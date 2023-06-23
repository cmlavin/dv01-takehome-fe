import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
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
  const [quarter, setQuarter] = useState('')
  const [term, setTerm] = useState('')
  const [year, setYear] = useState('')

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

  const handleQuarterChange = (event) => {
    setQuarter(event.target.value)
  }

  const handleTermChange = (event) => {
    setTerm(event.target.value)
  }

  const handleYearChange = (event) => {
    setYear(event.target.value)
  }

  const handleFilterReset = () => {
    setHomeOwnership('')
    setQuarter('')
    setTerm('')
    setYear('')
  }

  return (
    <Box sx={{ padding: '100px' }}>
      <LoanTable data={loanData} homeOwnership={homeOwnership} />
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '50px' }}>
          <Dropdown label="Home Ownership" options={Object.values(homeOwnershipEnum)} 
            value={homeOwnership} handleChange={handleHomeOwnershipChange} />
          <Dropdown label="Quarter" options={['1', '2', '3', '4']} 
            value={quarter} handleChange={handleQuarterChange} />
          <Dropdown label="Term" options={[' 36 months', ' 60 months']} 
            value={term} handleChange={handleTermChange} />
          <Dropdown label="Year" options={['2010', '2011', '2012', '2013', '2014', '2015', '2016']} 
            value={year} handleChange={handleYearChange} />
          <Button variant="outlined" onClick={() => handleFilterReset()}>Reset</Button>
        </Box>
    </Box>
  )
}

export default App
