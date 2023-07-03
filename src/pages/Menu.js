import React from 'react'
import Dashboardnav from '../components/dashboardComponents/dashboardnav'
import Foodspin from '../components/menuComponents/foodspin'

export default function Menu() {
  return (
    <div className='dark:bg-darkModeBlack px-24 relative z-30'>
      <div className='absolute top-0 w-full z-40'>
        <Dashboardnav dashboardboldFont={''} menuboldFont={'font-semibold'} />
      </div>
      <div>
        <Foodspin />
      </div>
    </div>
  )
}
