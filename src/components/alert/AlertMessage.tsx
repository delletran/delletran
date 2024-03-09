'use client'

import React, { useState } from 'react';
import { Alert, AlertTitle, IconButton } from '@mui/material';
import { IMUIVariant, IMUISeverity } from '@/types/style_types';
import { MdClose } from "react-icons/md";
import { useTimeout } from '@/hooks';

/**
 * Define the types of alert message properties
 *
 *
 * @param message - (string) Message details
 * @param title - (string) Header name
 * @param alertType - (IMUISeverity) Alert type e.g. 'error' | 'info' | 'success' | 'warning'
 * @param style - (IMUIVariant) Theme style e.g. 'filled' | 'outlined' | 'standard'
 * @param timeOut - (number) Timer in seconds before closing the component
 * @param isDismissible - (boolean) Enable/disable to close the component
 *
 * @beta
 */
type AlertMessageProps = {
  message: string
  title? : string
  alertType?: IMUISeverity
  style?: IMUIVariant
  timeOut?: number
  isDismissible?: boolean
}

const AlertMessage = ({ message, title, alertType, style, timeOut, isDismissible }: AlertMessageProps) => {
  const [show, setShow] = useState(true)

  /**
   * For a given timer value, close the component once timeout has been exhaust
   *
   * @remarks
   * This method is part of the hooks function.
   *
   * @param setShow - Callback function that will change the show state to close the component
   * @param timeOut - Timer in seconds before closing the component or null if there are no set delay time
   *
   */
  useTimeout(()=>setShow(false), timeOut || null)

  return (
    show &&
    <Alert
      variant={style || 'outlined'}
      severity={alertType || 'error'}

      action={
        isDismissible || timeOut &&
        <IconButton
          aria-label="alert-close"
          color="inherit"
          size="small"
          onClick={() => {
            setShow(false);
          }}
        >
          <MdClose fontSize="inherit" />
        </IconButton>
      }
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  )
}

export default AlertMessage;
