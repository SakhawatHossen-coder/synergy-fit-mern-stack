import { Typography } from '@material-tailwind/react';
import React from 'react'
import PricingTable from '../components/PricingTable';

const TrainerBook = () => {
  return (
    <div>
      <div className="mt-10">
        <Typography variant="h3" color="teal">
          Your Trainer: 
        </Typography>
      </div>
      <Typography className="bg-cyan-800 w-1/2 mx-auto text-white rounded-lg text-2xl mt-4">
        Time Slot:
      </Typography>
      <PricingTable />
    </div>
  );
}

export default TrainerBook