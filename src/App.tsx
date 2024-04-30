import React, { useState } from 'react';
import { Box, Stack, Divider, Button, ThemeProvider } from '@mui/material';

import MotorcycleForm from './components/moto/moto_form';
import MotorcycleList from './components/moto/moto_list';
import { Motorcycle } from './types';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import {  blue, deepOrange, grey, green} from '@mui/material/colors';

import './App.css';

function App() {
  const [Motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [theme, setTheme] = useState('light');

  const addMotorcycle = (Motorcycle: Motorcycle) => {
    setMotorcycles([...Motorcycles, Motorcycle]);
  };

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  const lightTheme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: 'light',
        primary: green,
        secondary: {
          main: blue[300],
        },
        
        divider: grey[600],
        background: {
          paper: '#fff',
        },
        text: {
          primary: '#000',
          secondary: grey[600],
        },
      },
    })
  );
  
  const darkTheme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: 'dark',
        primary: deepOrange,
        secondary: {
          main: green[700],
        },
        divider: deepOrange[700],
        background: {
          default: '#333',
          paper: '#222',
        },
        text: {
          primary: '#fff',
          secondary: grey[200],
        },
      },
    })
  );
  

  let selectedTheme;
  if (theme === 'light') selectedTheme = lightTheme;
  else selectedTheme = darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Box
        className={`app-container ${theme}`}
        sx={{
          backgroundColor: theme === 'light' ? '#fff' : '#222', 
          padding: '30px', 
        }}
      >
        <Box
          className="theme-toggle"
          sx={{ position: 'fixed', top: 10, left: 10 }}
        >
          <Button variant="contained" onClick={handleThemeChange}>
            {theme === 'light' ? 'Dark' : theme === 'dark' ? 'Light' : 'Light'}
          </Button>
        </Box>

        <Stack direction="row" spacing={1}>
          <Box className="Motorcycle-form-add">
            <MotorcycleForm addMotorcycle={addMotorcycle} />
          </Box>

          <Divider orientation="vertical" flexItem />

          <Box className="Motorcycle-form-list">
            <MotorcycleList
              motorcycles={Motorcycles}
              setMotorcycles={setMotorcycles}
            />
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
