import './App.css';
import CarForm from './components/car/car_form';
import { useState } from 'react';
import CarList from './components/car/car_list';
import { Car } from './types';



function App() {
  const [cars, setCars] = useState<Car[]>([]); 

  const addCar = (car: Car) => {
    setCars([...cars, car]);
  };

  return (
    <div className='car-form-container'>
      <div className='car-form-add'>
        <CarForm addCar={addCar} />
      </div>
      <div className='divider'></div>
      <div className='car-form-list'>
        <CarList cars={cars} setCars={setCars} />
      </div>
    </div>
  );
  
  
}

export default App;
