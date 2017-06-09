import React from 'react'
import ScroogeImage from '../assets/scrooge.png'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={ScroogeImage} />
  </div>
)

export default HomeView
