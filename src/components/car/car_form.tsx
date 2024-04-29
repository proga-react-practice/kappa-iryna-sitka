import React, { useState } from 'react';
import './car_form.css';
import { Car } from '../../types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';


const initialCarState: Car = {
  id: 0,
  maker: '',
  model: '12',
  year: 2020,
};

interface CarFormProps {
  addCar: (car: Car) => void;
}

export default function CarForm({ addCar }: CarFormProps) {
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

    <form onSubmit={handleSubmit} >
    <Stack direction="column" spacing={2}>

      <div>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Make:
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            id: "make",
            name: "make",
            value: car.maker,
            onChange: handleSelectChange,
          }}
        >
          <option value="">Select Maker</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
        </NativeSelect>
      </div>

      <div>
        <InputLabel htmlFor="model">Model:</InputLabel>
        <TextField
          id="model"
          name="model"
          value={car.model}
          onChange={handleChange}
        />
      </div>
      <div>
        <InputLabel htmlFor="year">Year:</InputLabel>
        <TextField
          type="number"
          id="year"
          name="year"
          value={car.year}
          onChange={handleChange}
          inputProps={{ min: 1900, max: 2024 }}
        />
      </div>
      {errors.map((error, index) => (
        <Alert key={index} severity="error">
          {error}
        </Alert>
      ))}

      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained" color="success">
          Submit
        </Button>

        <Button variant="contained" onClick={handleClear}>
          Clear
          <ClearIcon />
        </Button>
      </Stack>
      </Stack>

    </form>

  );
}
