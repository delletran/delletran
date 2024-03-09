'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IObject } from '@/types';
import { formatToId } from '@/helpers/parser/formater';


type Props = {
  title: string
  items?: IObject<any> // TODO remove optional
}

const CustomSelect = ({ title, items }: Props) => {
  const itemObjects = items ? items : {someA: 'items', someB: 'dummy'}

  const [state, setState] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={formatToId(`${title}-select-label`)}>{title}</InputLabel>
        <Select
          labelId={formatToId(`${title}-select-label`)}
          id={formatToId(`${title}-select-id`)}
          value={state}
          label={title}
          onChange={handleChange}
        >
          {Object.values(itemObjects)?.map((key:string, val:any)=>(
            <MenuItem key={key} id={`${key}-${val}`} value={val}>{key}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomSelect
