import React from 'react';
import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select
  } from '@mui/material'

export const Dropdown = ({label, options, value, handleChange}) => {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-select-label`}
          id={`${label}-select`}
          value={value}
          label={label}
          onChange={handleChange}
        >
        {Object.values(options).map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}