import React, { useState } from 'react';
import './car_form.css';
import { Car } from '../../types';


const initialCarState: Car = {
  id: 0,
  maker: '',
  model: '',
  year: 0,
};

interface CarFormProps {
  addCar: (car: Car) => void;
}

export default function CarForm({ addCar  }: CarFormProps) {
  const [car, setCar] = useState<Car>(initialCarState); 
  const [errors, setErrors] = useState<string[]>([]); 

  const validate = () => {
    const newErrors: string[] = [];
    if (!car.maker) {
      newErrors.push('Make is required');
    }
    if (!car.model) {
      newErrors.push('Model is required');
    }
    if (car.year <= 1900) {
      newErrors.push('Year must be greater than 1900');
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCar({ ...car, maker: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      addCar(car);
      setCar(initialCarState);

    }
  };

  const handleClear = () => {
    setCar(initialCarState);
    setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="make">Make:</label>
        <select
          id="make"
          name="make"
          value={car.maker}
          onChange={handleSelectChange}
        >
          <option value="">Select Maker</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
        </select>
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={car.model}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          min={1900}
          max={2024}
          id="year"
          name="year"
          value={car.year}
          onChange={handleChange}
        />
      </div>
      {errors.map((error, index) => (
        <div key={index}>{error}</div>
      ))}
      <button type="submit" style={{ backgroundColor: '#0c3f0c' }}>
        Submit
      </button>
      <button type="button" style={{ backgroundColor: '#0B419E' }} onClick={handleClear}>
        Clear
      </button>
    </form>
  );
}