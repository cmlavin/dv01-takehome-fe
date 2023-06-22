import React from 'react'
import {
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow
} from '@mui/material'

export const LoanTable = ({data}) => {
    // get all unique grades present in the data
    const uniqueGrades = [...new Set(data.map(obj => obj.grade))]
    // sort the grades from lowest to highest
    const sortedGrades = Array.from(uniqueGrades).sort()

    const generateColumns = () => {
        return sortedGrades.map(grade => 
            <TableCell key={`grade-${grade}`}>{`Grade ${grade}`}</TableCell>)
    }

    const generateRows = () => {
        const currentBalanceSum = {}
        // populate currentBalanceSum obj with sorted grades at an initial sum of 0
        sortedGrades.map(grade => currentBalanceSum[grade] = 0)
        // add the currentBalance to the sum in the appropriate key-value pair in currentBalanceSum
        data.map(obj => currentBalanceSum[obj.grade] += parseFloat(obj.currentBalance))
        return Object.values(currentBalanceSum).map((sum, index) => 
            <TableCell key={`current-balance-${index}-sum`}>{`$${sum.toFixed(2)}`}</TableCell>
        )
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {generateColumns()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {generateRows()}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}