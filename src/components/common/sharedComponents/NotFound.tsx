import React from 'react'
import styles from 'styles/common/NotFound.module.scss'
import {
  Typography,
} from '@mui/material'


type Props = {}

function NotFound({ }: Props): JSX.Element {
  return (
    <div className={styles.not_found_container}>
      <Typography>404 | Page Not Found</Typography>
    </div>
  )
}

export default NotFound
