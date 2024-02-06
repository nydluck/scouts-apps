// App.js
import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Submit from './Submit'


// Boxes and Textfields
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

// Components for the form
import TeamSelect from "./components/TeamSelect"
import Counter from "./components/Counter"
import NameField from "./components/NameField"
import Check from "./components/Check"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function App() {
  const [qtyHit, setQtyHit] = useState(0);
  const [qtyMiss, setQtyMiss] = useState(0);
  
  const handlePlus = (event,name) => {
    console.log("event:",event.target.value)
    if (name === "speakHit"){
      setQtyHit(parseInt(event.target.value, 10) + 1);
    }
    else if (name === "speakMiss"){
      setQtyMiss(parseInt(event.target.value, 10) + 1);
    }
    
  };

  const handleMinus = (event,name) => {
    if (parseInt(event.target.value, 10) < 1) {
      if (name === "speakHit"){
        setQtyHit(parseInt(event.target.value, 10));
      }
      else if (name === "speakMiss"){
        setQtyMiss(parseInt(event.target.value, 10));
      }
    }
    else {
      if (name === "speakHit"){
        setQtyHit(parseInt(event.target.value, 10) - 1);
      }
      else if (name === "speakMiss"){
        setQtyMiss(parseInt(event.target.value, 10) - 1);
      }
    }
  };
  
  /*const handlePlusMiss = (event) => {
    setQtyMiss(parseInt(event.target.value, 10) + 1);
  };

  const handleMinusMiss = (event) => {
    if (parseInt(event.target.value, 10) < 1) {
      setQtyMiss(parseInt(event.target.value, 10)); 
    }
    else {
      setQtyMiss(parseInt(event.target.value, 10) - 1);
    }
  };*/

  const data = [
    {
      matchNum: "Match 1", 
      teamNum: "254", 
      teamColor: 'Red 1', 
      matchLevel: "qual", 
      scouter: "Gus", 
      cross: "yes",
      preload: "no",
      speakerHit: "0",
      speakerMiss: "1",
      ampHit: "1",
      ampMiss: "0",
      comment: "blah blah blah"
    }
  ];

  //const values = ['2', 'arg']

  const handleClick = () => {
    // alert("blah");
    //console.log("qtyHit:",qtyHit);
    fetch('http://localhost:3001/send-form-goog', {
    method : "POST", 
    body : JSON.stringify(data),
    headers : {
        "Content-Type" : "application/json"
    }});
    
  };

  return (
    <><div class="match-info">
      <h1>SCOUTING APP</h1>

      <Box sx={{ width: 180 }}>
        <FormControl fullWidth>
        <TextField
          required
          id="scout-name"
          placeholder="Scout Name"
          margin="normal" />
        </FormControl>
      </Box>

      <TeamSelect/>
      
      <Box sx={{ width: 100 }}>
        <FormControl fullWidth>
        <TextField
          required
          id="team-number"
          placeholder="Team #"
          margin="normal" />
          </FormControl>
          </Box>
  
      <br></br>
    </div>
   
    <div class="match-auto">
        <h2>AUTO</h2>
        Speakers Made
        <Counter qty={qtyHit} handlePlus={handlePlus} handleMinus={handleMinus} name="speakHit"/>
        Speakers Missed
        <Counter qty={qtyMiss} handlePlus={handlePlus} handleMinus={handleMinus} name="speakMiss"/>

        <FormControlLabel 
          control={<Checkbox/>} 
          id="line-pass"
          label="Line Passed"
          labelPlacement="end"
        />
    </div>


    <div class="match-tele">
      <h2>TELEOP</h2>
    </div>

    <div class="match-comments">
      <Box sx={{ width: 400 }}>
      <FormControl fullWidth>
      <TextField
        id="comments"
        label="Comments"
        placeholder="Type your comments on the robot here."
        margin="none"
        multiline
        maxRows={4} />
        </FormControl>
        </Box>
    </div>

    <div class="submit">
        <br></br>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          >Submit
        </Button>
    </div></>
  );
}