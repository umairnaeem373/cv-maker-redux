import React from 'react'
import MainMenu from './Main Menu'
import MaskGroup from './MaskGroup'
import UserProfiles from './UserProfiles'
import JobSeeker from './JobSeeker'
import Employers from './Employers'

function Home() {
  return (
    <>
    <MainMenu/>
    <MaskGroup/>
    <UserProfiles/>
    <JobSeeker/>
    <Employers/>
    </>
  )
}

export default Home