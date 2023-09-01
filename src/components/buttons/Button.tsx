import { Button as Btn } from '@mui/material'
import styles from './button.module.scss'

type ButtonStyle = 'text' | 'outlined' | 'contained' | undefined
type ButtonType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | undefined
type ButtonSize =
  | 'small'
  | 'medium'
  | 'large'
  | undefined

type ButtonWidth =
  | 'fit'
  | 'normal'
  | 'long'
  | 'full'
  | undefined

type Props = {
  type?: ButtonType 
  style?: ButtonStyle
  title?: string
  size?: ButtonSize
  width?: ButtonWidth
  children?: string | any
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

}

function Button({ 
  type='primary',
  title,
  size='medium',
  width='normal',
  children,
  style='outlined',
  disabled=false,
  onClick
}: Props) {

  return (
    <button
      title={title}
      color={type}
      disabled={disabled}
      className={`
        ${styles[`btn__${type}`]}
        ${styles[`btn__${style}`]}
        ${styles[`btn__${width}`]}
      `}
      // size={size}
      onClick={onClick}
    >{title||children}</button>
  )
}

export default Button
