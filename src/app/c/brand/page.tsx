import React from 'react'
import Brand from '@/components/brand';
import Link from 'next/link';


type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={'/'}>
      <Brand 
        logoSize={350}
        BrandNameSize={377}
        spacing={2}
        direction='column'
        animation_type='onhover'
      />
      <Brand 
        logoSize={108}
        BrandNameSize={270}
        spacing={3}
        direction='row'
        animation_type='onload'
      />
    </Link>
  );
}

export default Logo