
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export default function Counter(param) {
  // const [qty, setQty] = useState(0); //Team Variable 
 console.log("qty:",param)
  /* const handlePlus = (event) => {
    setQty(qty + 1);
  };

  const handleMinus = (event) => {
    if (qty < 1) {
      setQty(qty); 
    }
    else {
      setQty(qty - 1);
    }
  };*/

  return (
    <div>
      <Box sx={{ width: 64 }}>
        <FormControl fullWidth>
        <Button
          value={param.qty}
          label="plus"
          variant="contained" color="secondary"
          onClick={(event) => param.handlePlus(event,param.name)}
        >+</Button>
      <TextField label="" variant="filled" value={param.qty}/>
        <Button
          value={param.qty}
          label="minus"
          variant="contained" color="secondary"
          onClick={(event) => param.handleMinus(event,param.name)}
        >-</Button>
        </FormControl>
      </Box>
    </div>
  );
};