import React, { useEffect, useState } from 'react'

type Props = {}

const NavShow = (props: Props) => {
  
  // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  // const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [scrollY, setScrollY] = useState<number>(0)
  const [showNav, setShowNav] = useState<boolean>(true)

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget)
  // }
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget)
  // }

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null)
  // }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowNav(window.scrollY < scrollY 
        ? true
        : window.scrollY > 100 ? false : true); 
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);
  return (
    <div>NavShow</div>
  )
}

export default NavShow