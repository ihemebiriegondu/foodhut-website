import React from 'react'
import Dashboardnav from '../components/dashboardComponents/dashboardnav'
import Foodspin from '../components/menuComponents/foodspin'

export default function Menu() {
  return (
    <div className='dark:bg-darkModeBlack px-16'>
        <Dashboardnav dashboardboldFont={''} menuboldFont={'font-semibold'} />
        <div>
            <Foodspin />
        </div>
    </div>
  )
}
