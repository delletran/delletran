'use client'

import React from 'react'
import { IObject } from '@/types';
import { formatToId, sortObjects } from '@/helpers/parser/formater';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from '@mui/material';


type Props = {
  options: IObject<any>[]
  label: string
  handleChange: any
  sortBy?: string
}

const CheckList = ({ options, label, handleChange, sortBy }: Props) => {

  return (
    <Box sx={{ px: 2, pb: 2 }}>
      <FormGroup>
        {options && options.length > 0 && sortObjects(options, sortBy ? sortBy : label).map((option) => (
          <FormControlLabel
            id={formatToId(`${option[label]}-${option}`)}
            key={formatToId(`${option[label]}-checkbox`)}
            control={
              <Checkbox
                checked={option.checked ? option.checked : false}
                onChange={(e) => handleChange(e, option[label])}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={option[label]}
          />
        ))}
      </FormGroup>
    </Box>
  )
}


export default CheckList
