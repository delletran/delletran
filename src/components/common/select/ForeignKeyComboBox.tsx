'use client'

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { IDimensionKeys, IObject } from '@/types';
import { formatObjectDisplayName, formatToId, sortObjects } from '@/helpers/parser/formater';
import { Tooltip } from '@mui/material';


type Props = {
  title: string
  options: IObject<any>[]
  uniquieKey?: string
  attribKeys: string[]
  objValue: IObject<any>
  setObjValue: Dispatch<SetStateAction<IDimensionKeys>>
  disabled?: boolean
  handlerKey?: string
  handler?: Function
  saveHandler?: Function
}

const ForeignKeyComboBox = ({
  title,
  options,
  uniquieKey = 'id',
  attribKeys,
  objValue,
  setObjValue,
  disabled = false,
  handlerKey='Enter',
  handler,
  saveHandler
}: Props) => {
  const [formatedOptions, setFormatedOptions] = useState<IObject<any>[]>([])
  const [inputValue, setInputValue] = useState<string | null>(objValue?.[attribKeys[1]] || '');

  useEffect(() => {
    let newObject: IObject<any>[] = []
    const objLen = options.length
    // const keyPadding = Math.ceil(Math.log10(objLen)) + 1

    objLen > 0 &&
      sortObjects(options, attribKeys[1]).map((option: IObject<any>) => {
        newObject.push({
          ...option,
          [attribKeys[1]]: formatObjectDisplayName(option, attribKeys, uniquieKey, 0)
        })
      })
    setFormatedOptions(newObject)
  }, [options, attribKeys, uniquieKey])

  const handleSetValue = (value: string | null) => {
    setInputValue(value)
    const newVal = formatedOptions.filter(opt => opt[attribKeys[1]] == value)[0]

    setObjValue(newVal as IDimensionKeys)
  }
  
  const onKeyDown = (e: React.KeyboardEvent) => {
    e.key === 'Enter' && e.preventDefault()
    e.key === handlerKey && handler && handler()
    e.ctrlKey && e.key === 's' && saveHandler && (
      saveHandler(),
      e.preventDefault()
    )
  }

  return (
    <Stack key={formatToId(`${title}-combo-box`)} spacing={2} sx={{ width: 280 }}>
      <Autocomplete
        id={formatToId(`${title}-combo-auto`)}
        options={formatedOptions.map((option) => option[attribKeys[1]])}
        value={objValue?.[attribKeys[1]] || null}
        onChange={(e: any, val: string | null) => setInputValue(val)}
        inputValue={inputValue || ''}
        onInputChange={(e: any, val: string) => handleSetValue(val)}
        disableListWrap
        disabled={disabled}
        renderOption={(props, option) =>
          <li {...props} key={option}>
            {option}
          </li>
        }
        renderInput={(params) =>
          <Tooltip title={title} >
            <Stack
              display={'flex'}
              direction={'row-reverse'}
              justifyContent={'left'}
              spacing={1}
              sx={{ ml: 1, my: 1 }}
            >
              <TextField
                {...params}
                label={title}
                sx={{ minWidth: 220 }}
                onKeyDown={onKeyDown}
              />
            </Stack>
          </Tooltip>
        }
      />
    </Stack>
  );
}


export default ForeignKeyComboBox
