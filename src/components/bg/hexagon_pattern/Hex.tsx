'use client'

import React from 'react'
import styles from './hex.module.scss'
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

type HexProps = {
  content?: any | null
  count?: number
}


const Hexagons = () => {
  return (<>
    <span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/>
  </>)
}

const Hex = ({content="", count=10}: HexProps) => {

  return (
    <div className={styles['hex-container']}>
      <div className={styles['hex']}>
        <div className={styles['container']}>
          <div className={styles['wrapper']}>
            {
              Array.from({length: count})
                .map((_, index) => (<Hexagons key={index}/>)
              )
            }
          </div>
          {content}
        </div>
      </div>
    </div>
  )
}



export default Hex