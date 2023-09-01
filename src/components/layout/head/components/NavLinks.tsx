import React, { useEffect, useState } from 'react'

import { 
  MdMenu,
  MdHome, 
  MdInfo,
  MdArticle,
  MdEvent,
  MdOutlineImportContacts,
} from "react-icons/md";
import styles from '../head.module.scss'
import NavLInk from './NavLInk';
import { Box, IconButton, Menu, MenuItem, SelectChangeEvent, Stack, Typography } from '@mui/material';


const navLinks = [
  { id: 'nav-link-home', label: 'Home', link: '/', sublabel: '', icon: <MdHome fontSize="large" />},
  // { id: 'nav-link-blog', label: 'Blogs', link: '/blog', sublabel: '', icon: <MdInfo fontSize="large" />},
  { id: 'nav-link-services', label: 'Services', link: '/services', sublabel: '', icon: <MdArticle fontSize="large" />},
  { id: 'nav-link-portfolio', label: 'Portfolio', link: '/portfolio', sublabel: '', icon: <MdInfo fontSize="large" />},
  { id: 'nav-link-about', label: 'About', link: '/about', sublabel: '', icon: <MdEvent fontSize="large" />},
  { id: 'nav-link-contact', label: 'Contact', link: '/contact', sublabel: '', icon: <MdOutlineImportContacts fontSize="large" />},
]

type Props = {
  
}

const NavLInks = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [innerWidth, setInnerWidth] = useState<number>(0)
  const [innerHeight, setInnerHeight] = useState<number>(0)
  const [scrollHeight, setScrollHeight] = useState<number>(0)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleResize = event => {
      setInnerWidth(window.innerWidth)
      setInnerHeight(window.outerHeight)
      setScrollHeight(document.documentElement.scrollHeight)
      console.log(innerWidth, innerHeight, scrollHeight)
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [innerWidth, innerHeight, scrollHeight]);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(true)
    setAnchorElNav(event.currentTarget)
  };
  
  const handleCloseNavMenu = () => {
    setOpenMenu(false)
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    console.log(openMenu)
  }, [openMenu])


  const renderDesktopLinks = () => 
    navLinks.map((item) => (
      <NavLInk 
        key={item.id}
        id={item.id}
        label={item.label}
        link={item.link}
        sublabel={item.sublabel}
        icon={item.icon}
      />
    ))
  
  const renderMobileLinks = () => (
    <Box className={styles['menu-links-wapper']} >{
      navLinks.map((item) => (
        <MenuItem 
          key={item.id}
          onClick={handleCloseNavMenu}
        >
            {<NavLInk 
                key={item.id}
                id={item.id}
                label={item.label}
                link={item.link}
                sublabel={item.sublabel}
                icon={item.icon}
                // isMobile={true}
            />}
        </MenuItem>
      ))}
    </Box>
  )

  const renderMobileViewMenu = () => (
    <Menu
      id="nav-mobile-menu"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      className={styles['nav-mobile-menu']}
      sx={{
        display: { xs: 'block', lg: 'none' },
      }}>
      {renderMobileLinks()}
    </Menu>
    )

  const renderMobileView = () => (
    <Stack
      direction={'column'}
      sx={{ display: { xs: 'flex', lg: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MdMenu />
      </IconButton>
      {openMenu ? renderMobileViewMenu() : ''}
    </Stack>
  )

  const renderDesktopView = () => (
    <Stack
      direction={'row'}
      sx={{ display: { xs: 'none', lg: 'flex' } }}>
      {renderDesktopLinks()}
    </Stack>
  )


  return (
    <>
      {renderMobileView()}
      {renderDesktopView()}
    </>
  )
}

export default NavLInks