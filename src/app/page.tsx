import Image from 'next/image'
import NavBar from '@/components/layout/head/NavBar'
import Hero from '@/components/layout/main/hero/Hero'
import { Hex } from '@/components/bg'

export default function Home() {
  console.log(process.env.NODE_ENV)
  return (
    <>
      {/* <NavBar /> */}
      <Hex count={30}/>
      <main className="main-container flex flex-col items-center justify-between py-0">
        <div className="main-wrapper">
          <Hero />
        </div>
      </main>
    </>
  )
}
