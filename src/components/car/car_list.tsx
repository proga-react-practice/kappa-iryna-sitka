// import { Car } from '../types';
import './car_list.css';

export interface Car {
  id: number;
  maker: string
  model: string
  year: number
}
interface CarListProps {
  cars: Car[];
  setCars: (cars: Car[]) => void;
}

export default function CarList({ cars, setCars }: CarListProps) {
  return (
    <ul className="car-list">
      {cars.map((car, i) => {
        const deleteCar = () => {
          const newCars = [...cars];
          newCars.splice(i, 1);
          setCars(newCars);
        };

        return (
          <li className="car-item" key={i}>
            <div>
              <p>Maker: {car.maker}</p>
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
            </div>
            <button onClick={deleteCar}   style={{ backgroundColor: '#4d0909' }}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
