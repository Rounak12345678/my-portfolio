import { MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material'
import React, { useEffect } from 'react'

import FormControl from '@mui/material/FormControl';


interface commonSelectProps extends SelectProps{
    valueCallback:(data:string)=> void;
    
}

const CommonSelect:React.FC<commonSelectProps &  SelectProps> = ({valueCallback,...props}) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    useEffect(() => {
      if(value){
        valueCallback(value)
      }
    }, [value])
    
  return (
    <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={value}
          onChange={handleChange as any}
          {...props}
        >
            <MenuItem value="" >Select</MenuItem>
            {props?.children}
        </Select>
      </FormControl>
  )
}

export default CommonSelect