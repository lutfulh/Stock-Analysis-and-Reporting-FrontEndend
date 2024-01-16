import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Example data for company mapping
const companyOptions = [
  { label: 'Apple', value: 'Apple Inc.' },
  { label: 'Microsoft', value: 'Microsoft Corporation' },
  { label: 'Amazon', value: 'AMZN' }
];

const SearchForm = ({ onSubmit }) => {
  const [company, setCompany] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCompanyName = companyOptions.find(c => c.label === company)?.value || company;
    onSubmit(fullCompanyName);
    // Clear the form here
    setCompany('');
    setInputValue('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Autocomplete
        freeSolo
        options={companyOptions.map((option) => option.label)}
        value={company}
        onChange={(event, newValue) => {
          setCompany(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a company"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        )}
        sx={{ width: 300 }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2, mb: 4 }}
      >
        Analyze
      </Button>
    </Box>
  );
};

export default SearchForm;
