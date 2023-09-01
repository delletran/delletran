'use client';

import React from 'react'

type Props = {
  children: JSX.Element
}

const RootLayout = ({ children }: Props) => {
  return (
    <div>
      <div>RootLayout</div>
      <html lang="en" className={''}>
        <body
            suppressHydrationWarning={true} 
          >
          {children}
        </body>
      </html>

    </div>
  )
}