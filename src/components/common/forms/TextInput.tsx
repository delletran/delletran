'use client'

import React, { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { formatToId } from '@/helpers/parser/formater';
import { InputAdornment } from '@mui/material';


type Props = {
  title: string
  value: string | number
  setValue: Dispatch<SetStateAction<string | number>>
  disabled?: boolean
  type?: string
  style?: {}
  handlerKey?: string
  handler?: Function
  saveHandler?: Function
}


const TextInput = ({ title,
  value,
  setValue,
  disabled,
  type = 'text',
  style,
  handlerKey='Enter',
  handler,
  saveHandler
}: Props) => {

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.key === 'Enter' && e.preventDefault()
    e.key === handlerKey && handler && handler()
    e.ctrlKey && e.key === 's' && saveHandler && (
      saveHandler(),
      e.preventDefault()
    )
  }

  return (
    <Box
      key={formatToId(`${title}-text-input`)}
      component="form"
      sx={ style ? style : {
        '& > :not(style)': { my: 1, ml: 1, width: 272 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={formatToId(`${title}-textfield`)}
        label={title}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue ? setValue(event.target.value) : ''
        }}
        onKeyDown={onKeyDown}
        disabled={disabled}
        type={type}
        InputProps={{
          startAdornment: type == 'date' &&
            <InputAdornment position="start"></InputAdornment>
        }}
      />
    </Box>
  );
}


export default TextInput
