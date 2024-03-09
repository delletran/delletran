'use client'

import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { Popover, Typography } from '@mui/material'
import { formatToId } from '@/helpers/parser/formater'


type Props = {
  title?: string
  anchorEl: HTMLButtonElement | null
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>
  trigger: ReactNode
  children?: ReactNode
}

const CustomPopover = ({ title, anchorEl, setAnchorEl, trigger, children }: Props) => {
  const open = Boolean(anchorEl);
  const id = open ? formatToId(`${title}-popover`) : undefined;

  return (
    <>
      {trigger}
      <Popover
        id={`${id}-popover`}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {title && <Typography sx={{ p: 2 }}>{title}</Typography>}
        {children}
      </Popover>
    </>
  )
}


export default CustomPopover
