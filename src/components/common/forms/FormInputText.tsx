import { useState, useEffect } from 'react'
import styles from 'styles/common/Forms.module.scss'
import { MdError } from 'react-icons/md';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  InputAdornment,
  TextField,
} from '@mui/material'

type VariantProps = 'standard' | 'outlined' | 'filled';

type Props = {
  label: string | null;
  value: string | null;
  required?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  maxRows?: number;
  onChange: any;
  error?: string | null;
  type?: string | null;
  variant?: VariantProps | null;
}

function FormInputText({
  label,
  value,
  required = false,
  fullWidth = true,
  multiline = false,
  maxRows = 0,
  onChange,
  error,
  type,
  variant,
}: Props): JSX.Element {
  return (
    <div className={styles.form_input_wrapper}>
      <FormControl
        fullWidth={fullWidth} sx={{ m: 1 }}
        variant={variant || 'standard'}
        required={required}>
        <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={value}
          multiline={maxRows > 0 ? true : multiline}
          maxRows={maxRows}
          onChange={onChange}
          required={required}
          type={type || ''}
        />
        {error && (
          <FormHelperText error>
            <MdError />
            {error}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  )
}

export default FormInputText
