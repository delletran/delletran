import React from 'react'
import NavBar from '@/components/layout/head/NavBar'

async function getPosts() {
  const url = 'http://127.0.0.1:3000/api'
}

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <>
      {/* <NavBar /> */}
      <div>AboutPage</div>
      <div id='#join_us'>AboutPage</div>
    </>
  )
}

export default AboutPage