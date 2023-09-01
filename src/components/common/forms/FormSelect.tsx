import { useState, useEffect } from 'react'
import styles from 'styles/common/Forms.module.scss'

import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';

type VariantProps = 'standard' | 'outlined' | 'filled';

type Props = {
  label: string | null;
  items: any[];
  values: any[];
  multiple: boolean;
}

function FormSelect({
  label,
  items,
  values,
  multiple = false,
}: Props): JSX.Element {
  const [val, setVal] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof val>) => {
    const {
      target: { value },
    } = event;
    setVal(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const renderItems = () => {
    const menuItems = items.map((item, index)=>(
      <MenuItem key={values[index]} value={values[index]}>{item}</MenuItem>
    ))
    return menuItems
  }

  useEffect(()=>{
    console.log("val:", val)
  },[val])

  const formId = `${label?.toLowerCase()}_${multiple ? 'multiple' : 'select'}`

  return (
    <div className={styles.form_input_wrapper}>
      <FormControl fullWidth>
        <InputLabel id={formId}>{label}</InputLabel>
        <Select
          labelId={formId}
          id={formId}
          value={val}
          label={label}
          onChange={handleChange}
          multiple={multiple}
          input={<OutlinedInput label="Name" />}
        >
          {renderItems()}
        </Select>
      </FormControl>
    </div>
  )
}

export default FormSelect
