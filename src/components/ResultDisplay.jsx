import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ResultDisplay = ({ companyName, analysis }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 3, minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {analysis ? (
          <>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Analysis Result for {companyName}
            </Typography>
            <Typography variant="body1">{analysis}</Typography>
          </>
        ) : (
          <Typography variant="body1" color="text.secondary">
            No analysis to display. Please enter a company name above and click "Analyze".
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default ResultDisplay;
