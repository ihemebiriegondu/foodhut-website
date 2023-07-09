import React from 'react'
//import { useNavigate } from 'react-router-dom';
import Dashboardnav from '../components/dashboardComponents/dashboardnav'

import { useUserAuth } from '../context/SupabaseAuth';

export default function Dashboard() {
  const { user } = useUserAuth();

  //const navigate = useNavigate();
  console.log(user)


  return (
    <div className='dark:bg-darkModeBlack px-4 xsm:px-8 sm:px-12 xlg:px-24'>
      <Dashboardnav dashboardboldFont={'font-semibold'} menuboldFont={''} />
    </div>
  )
}
