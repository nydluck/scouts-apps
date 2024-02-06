import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Check() {
    
    return (

        <div>
            <FormControlLabel 
                control={<Checkbox/>} 
                label="Line Passed"
                labelPlacement="end"
                />
        </div>

    )

}