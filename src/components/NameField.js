import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function NameField() {
    const [scoutname] = useState("");

    return(
    <div>
    
        <TextField
        required
        id="scout-name"
        placeholder="Scout Name"
        value={scoutname}
        />
    
    </div>
    );
};