import React, { Dispatch, SetStateAction } from 'react'
import { Fab } from '@mui/material'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md'

type Props = {
  prevAction: Dispatch<SetStateAction<null>>
  nextAction: Dispatch<SetStateAction<null>>
  isSibeBarOpen?: boolean
}

const FloatingPagginationButton = ({ prevAction, nextAction, isSibeBarOpen: isSibebarOpen = false }: Props) => {
  return (
    <>
      <Fab
        color="primary"
        size="large"
        aria-label="prev"
        onClick={()=>prevAction(null)}
        sx={{
          position: 'fixed',
          top: '50%',
          left: isSibebarOpen ? 'calc(21.75rem + 1rem)' : '5rem',
          transition: 'all 250ms ease-out',
          backgroundColor: 'transparent',
          zIndex: 9999
        }}
      >
        <MdOutlineChevronLeft size={48} style={{ color: 'navy' }} />
      </Fab>
      <Fab
        color="primary"
        size="large"
        aria-label="next"
        onClick={()=>nextAction(null)}
        sx={{
          position: 'fixed',
          top: '50%',
          right: '1rem',
          backgroundColor: 'transparent',
          zIndex: 9999
        }}
      >
        <MdOutlineChevronRight
          size={48} style={{ color: 'navy' }} />
      </Fab>
    </>
  )
}

export default FloatingPagginationButton