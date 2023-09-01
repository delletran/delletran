'use client';

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { publicURL } from '@/services/api'
import styles from '../main.module.scss'
import Button from '@/components/buttons/Button'
import Link from 'next/link';


type Props = {}

function Hero({}: Props) {
  const { push } = useRouter()

  const handleLinkSection  = (link:string, section_id:string) => {
    push(`/${link}#${section_id || ''}`)
  }

  return (
    <div className={styles.hero_container} >
      <div className={styles.content_container} >
        <div className={styles.content} >
          {/* <div className={styles.sup_heading}>delletran.com</div> */}
          <div className={styles.heading}>Full-Stack Web Developer</div>
          <span className={styles.sub_heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore,
            sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore
          </span>
          <div className={styles.button_wrapper}>
            <Button
              title='Learn More'
              type='primary'
              style='contained'
              width='long'
              size='large'
              onClick={()=>handleLinkSection('about', 'join_us')}
            />
            <Button
              title='Contact'
              type='secondary'
              style='outlined'
              width='long'
              size='large'
              onClick={()=>handleLinkSection('contact', 'contribute')}
            />
          </div>
        </div>
      </div>
      <span className={styles.image_wrapper} >
        <div className={styles.image}>
          <Image
            src={`${publicURL}/images/profile_a.png`}
            alt="logo"
            width={900}
            height={900}
          />
        </div>
      </span>
      {/* <div className={styles.svg_wrapper} >
      </div> */}
    </div>
  )
}
export default Hero