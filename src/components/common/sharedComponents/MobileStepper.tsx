import { useState, useEffect } from 'react'
import styles from 'styles/common/MobileStepper.module.scss'
import { useTheme } from '@mui/material/styles'
import { MobileStepper as MStepper, Button } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

type Props = {
  count: number
  activeStep: number
  setActiveStep: any
}
function MobileStepper({count, activeStep, setActiveStep}: Props) {
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className={styles.mobile_stepper_wrapper}>
      <MStepper
        variant='dots'
        steps={count}
        position='static'
        activeStep={activeStep}
        className={styles.mobile_stepper}
        nextButton={
          <Button size='large' onClick={handleNext} disabled={activeStep === (count-1)}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='large' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </div>
  )
}

export default MobileStepper