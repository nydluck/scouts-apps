
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function TeamSelect() {
  const [team, setTeam] = useState(""); //Team Variable 

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <div>
   
      <Box sx={{ width: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
          //labelId="demo-simple-select-label"
          id="alliance"
          value={team}
          label="Team"
          onChange={handleChange}>
          <MenuItem value="Red1">Red 1</MenuItem>
          <MenuItem value="Red2">Red 2</MenuItem>
          <MenuItem value="Red3">Red 3</MenuItem>
          <MenuItem value="Blue1">Blue 1</MenuItem>
          <MenuItem value="Blue2">Blue 2</MenuItem>
          <MenuItem value="Blue3">Blue 3</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </div>
  );
};