'use client'
import React from 'react'
import styles from './brand.module.scss';
import BrandName from './brand-name'
import Logo from './logo'
import { Stack } from '@mui/material';

type Props = {
  animation_type: "onload" | "onhover"
  direction?: "column" | "row"
  logoSize?: number
  BrandNameSize?: number
  spacing?: number
}

const Brand = (props: Props) => {
  const {
    animation_type='onhover',
    direction='column',
    logoSize=254,
    BrandNameSize=270,
    spacing=2
  } = props

  return (
    <div id={styles["brand-container"]}>
      <Stack
        id={styles["brand-wrapper"]}
        className={`
          ${styles[`brand-wrapper`]}
          ${styles[`brand-animate-${animation_type}`]}
          ${styles[`brand-wrapper-${direction}`]}
        `}
        spacing={spacing}
        flexDirection={direction}
        >
        <Logo size={logoSize} />
        <BrandName size={BrandNameSize} />
      </Stack>
    </div>
  )
}

export default Brand