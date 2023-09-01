import { publicURL  } from '@/services/api'
import { Tooltip } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from '../head.module.scss'
import { usePathname } from 'next/navigation';

type Props = {
  id: string
  label: string
  link: string
  sublabel?: string
  icon: JSX.Element
  isMobile?: boolean
}

const NavLInk = (props: Props) => {
  const { id, label, link, sublabel, icon, isMobile=false } = props
  const pathname = usePathname()

  return (
      <Link
        key={id}
        href={`${publicURL}/${link}`}
        className={`
          ${styles[`nav-link${isMobile ? '-mobile' : ''}`]}
          ${(pathname == link) && styles[`nav-link${isMobile ? '-mobile' : ''}_active`]}
        `}
      >
        {label}
      </Link>
  )
}

export default NavLInk