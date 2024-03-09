import NavBar from '@/components/layout/head/NavBar'
import './globals.scss'
import { Inter } from 'next/font/google'

// import { Provider } from 'react-redux'
// import Provider from 'react-redux'
import { Provider } from '@/redux/services/provider'
import { store } from '@/redux/services/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'delletran',
  description: 'delletran.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={inter.className} 
        // suppressHydrationWarning={true}
      > 
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
