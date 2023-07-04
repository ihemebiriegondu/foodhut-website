import React from 'react'
import Dashboardnav from '../components/dashboardComponents/dashboardnav'
import Foodspin from '../components/menuComponents/foodspin'

export default function Menu() {
  return (
    <div className='dark:bg-darkModeBlack px-4 xsm:px-8 sm:px-12 xlg:px-24 relative z-30 overflow-x-hidden'>
      <div className='relative z-40'>
        <Dashboardnav dashboardboldFont={''} menuboldFont={'font-semibold'} />
      </div>
      <div>
        <Foodspin />
      </div>
    </div>
  )
}
