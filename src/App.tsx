import './App.css';
import CarForm from './components/car/car_form';
import { useState } from 'react';
import CarList from './components/car/car_list';

export interface Car {
  id: number;
  maker: string;
  model: string;
  year: number;
}

function App() {
  const [cars, setCars] = useState<Car[]>([]); 

  const addCar = (car: Car) => {
    setCars([...cars, car]);
  };

  return (
    <div className='cars-container'>
      <div className='left'>
        <CarForm addCar={addCar} />
      </div>
      <div className='divider'></div>
      <div className='car-grid'>
        <CarList cars={cars} setCars={setCars} />
      </div>
    </div>
  );
  
  
}

export default App;
