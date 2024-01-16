import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';
import { analyzeStock } from './services/stockService';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
  },
 
});

function App() {
  const [analysisData, setAnalysisData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (companyName) => {
    setLoading(true);
    try {
      const result = await analyzeStock(companyName);
      setAnalysisData(prevData => [
        ...prevData,
        { companyName, analysis: result.analysis }
      ]);
    } catch (error) {
      console.error('Error in handleAnalyze:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <SearchForm onSubmit={handleAnalyze} />
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {analysisData.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ResultDisplay companyName={data.companyName} analysis={data.analysis} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
