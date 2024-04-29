import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import  Stack from '@mui/material/Stack';

import { Car } from '../../types';
// import './car_list.css';

interface CarListProps {
  cars: Car[];
  setCars: (cars: Car[]) => void;
}

export default function CarList({ cars, setCars }: CarListProps) {
  const [deletedIndex, setDeletedIndex] = React.useState<number | null>(null);

  const deleteCar = (index: number) => {
    const newCars = [...cars];
    newCars.splice(index, 1);
    setDeletedIndex(index);
    setTimeout(() => {
      setDeletedIndex(null);
      setCars(newCars);
    }, 500); 
  };

  return (
    <div className="car-list">
    <Stack direction="column" spacing={2}>

      {cars.map((car, i) => (
        <Collapse key={i} in={deletedIndex !== i} unmountOnExit>
          <Card className="car-item">
            
            <CardContent>
              <p>Maker: {car.maker}</p>
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
              <Button onClick={() => deleteCar(i)} color='error' variant="contained" >
                Delete
              </Button>
            </CardContent>
          </Card>
        </Collapse>

      ))}
     </Stack>
    </div>
  );
}
