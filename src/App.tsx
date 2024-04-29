import './App.css';
import CarForm from './components/car/car_form';
import { useState } from 'react';
import CarList from './components/car/car_list';
import { Car } from './types';
import MaterialUISwitch from './components/materialUISwitch'; 
import { createTheme, ThemeProvider } from '@mui/material';
import {  useEffect } from 'react';

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const addCar = (car: Car) => {
    setCars([...cars, car]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#646bf3',
      },
      secondary: {
        main: '#fff',
      },
      background: {
        default: darkMode ? '#101113' : '#fff',
      },
      text: {
        primary: darkMode ? '#fefefe' : '#101113',
      },
    },
  });

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    document.body.style.color = theme.palette.text.primary;
  }, [theme]);
  

  return (
    <ThemeProvider theme={theme}>
      <div className='app-container'>
      <div className="theme-toggle" style={{ position: 'fixed', top: '20px', right: '20px' }}>

        <MaterialUISwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          inputProps={{ 'aria-label': 'toggle dark mode' }}
          color="secondary"
          style={{ marginRight: '10px' }}
        />
      </div>

        <div className='car-form-container'>
          <div className='car-form-add'>
            <CarForm addCar={addCar} />
          </div>

          <div className='divider'></div>
          <div className='car-form-list'>
            <CarList cars={cars} setCars={setCars} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
