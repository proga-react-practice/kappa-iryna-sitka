import React, { useState } from 'react';
import { Box, Stack, Divider, Button, ThemeProvider } from '@mui/material';

import MotorcycleForm from './components/moto/moto_form';
import MotorcycleList from './components/moto/moto_list';
import { Motorcycle } from './types';
import {darkTheme,lightTheme} from  "./themes";

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
 
  

  let selectedTheme;
  if (theme === 'light') selectedTheme = lightTheme;
  else selectedTheme = darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Box
        className={`app-container ${theme}`}
        sx={{
          backgroundColor: theme === 'light' ? '#fff' : '#222', 
          padding: '3', 
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
