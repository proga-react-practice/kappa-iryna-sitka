import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import {Typography } from '@mui/material';

import { Motorcycle } from '../../types';

interface MotorcycleListProps {
  motorcycles: Motorcycle[];
  setMotorcycles: (motorcycles: Motorcycle[]) => void;
}

export default function MotorcycleList({ motorcycles, setMotorcycles }: MotorcycleListProps) {
  const [deletedIndex, setDeletedIndex] = React.useState<number | null>(null);

  const deleteMotorcycle = (index: number) => {
    const newMotorcycles = [...motorcycles];
    newMotorcycles.splice(index, 1);
    setDeletedIndex(index);
    setTimeout(() => {
      setDeletedIndex(null);
      setMotorcycles(newMotorcycles);
    }, 500);
  };

  return (
      <Stack direction="column" spacing={2}>
        {motorcycles.map((motorcycle, i) => (
          <Collapse key={i} in={deletedIndex !== i} unmountOnExit>
            <Card className="motorcycle-item">
              <CardContent>
                <Typography variant="body1">Maker: {motorcycle.maker}</Typography>
                <Typography variant="body1">Model: {motorcycle.model}</Typography>
                <Typography variant="body1">Year: {motorcycle.year}</Typography>
                <Button onClick={() => deleteMotorcycle(i)} color='error' variant="contained">
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Collapse>
        ))}
      </Stack>
  );
}
