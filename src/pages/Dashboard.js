import React from 'react'
import Dashboardnav from '../components/dashboardComponents/dashboardnav'

export default function Dashboard() {
  return (
    <div className='dark:bg-darkModeBlack px-4 xsm:px-8 sm:px-12 xlg:px-24'>
      <Dashboardnav dashboardboldFont={'font-semibold'} menuboldFont={''} />
    </div>
  )
}
