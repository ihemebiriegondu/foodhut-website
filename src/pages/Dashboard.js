import React from 'react'
import Dashboardnav from '../components/dashboardComponents/dashboardnav'

export default function Dashboard() {
  return (
    <div className='dark:bg-darkModeBlack px-16'>
      <Dashboardnav dashboardboldFont={'font-semibold'} menuboldFont={''} />
    </div>
  )
}
