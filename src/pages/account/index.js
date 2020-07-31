import React from 'react'
import { Link } from 'gatsby'
import { Router } from '@reach/router'
import { login, logout, isAuthenticated, getProfile } from '../../utils/auth'

import Layout from '../../components/layout'
import TableContainer from '../../components/tableContainer'

const Dashboard = ({ user }) => {
  return (
    <Layout>
      <p className='pt-4 pl-4 text-lg font-semibold text-gray-100'>
        Hi, {user.name ? user.name : 'friend'}!
      </p>
      <section className='flex flex-col items-center justify-center w-full h-screen text-gray-100'>
        <TableContainer />
      </section>
    </Layout>
  )
}
const Profile = ({ user }) => {
  return (
    <Layout>
      <section className='flex flex-col items-center justify-center w-full h-screen text-gray-100'>
        <h1 className='text-3xl font-semibold text-center lg:text-5xl'>
          My Profile
        </h1>
        <div className='flex flex-col items-center justify-center max-w-sm py-6 mx-auto text-center'>
          <b className='uppercase'>Company Name:</b>
          <p className='py-3'>
            {user['https://corewater.co.za/claimsuserMetadata'].company}
          </p>
          <b className='uppercase'>Contact Person:</b>
          <p className='py-3'>
            {user['https://corewater.co.za/claimsuserMetadata'].liaison}
          </p>
          <b className='uppercase'>Phone Number:</b>
          <p className='py-3'>
            {user['https://corewater.co.za/claimsuserMetadata'].phone}
          </p>
          <b className='uppercase'>Email Address:</b>
          <p className='py-3'>{user.email}</p>
          <b className='uppercase'>Delivery Address:</b>
          <p className='py-3'>
            {user['https://corewater.co.za/claimsuserMetadata'].address}
          </p>
          <b className='uppercase'>Delivery Day/s:</b>
          <p className='py-3'>
            {user['https://corewater.co.za/claimsuserMetadata'].delivery}
          </p>
        </div>
      </section>
    </Layout>
  )
}

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p className='py-3'>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <nav className='absolute top-0 left-0 flex items-center justify-between w-full text-sm font-semibold text-gray-900 bg-transparent lg:text-lg'>
        <div className='flex flex-col items-start justify-start w-full h-full pt-2 pl-2 lg:pt-4 lg:pl-4 lg:block'>
          <Link className='pt-4 hover:text-SA-blue' to='/account/'>
            Dashboard
          </Link>{' '}
          <Link className='lg:ml-4 hover:text-SA-blue' to='/account/profile/'>
            My Profile
          </Link>{' '}
        </div>
        <div className='flex flex-col items-end justify-start w-full h-full pr-2 lg:pt-4 lg:pr-4'>
          <a
            className='ml-4 hover:text-SA-blue'
            href='#logout'
            onClick={(e) => {
              logout()
              e.preventDefault()
            }}
          >
            Log Out
          </a>
        </div>
      </nav>
      <Router>
        <Dashboard path='/account/' user={user} />
        <Profile path='/account/profile' user={user} />
      </Router>
    </>
  )
}

export default Account
