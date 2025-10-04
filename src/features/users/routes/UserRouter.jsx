import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserProfile from '../pages/UserProfile'
import Sidebar from '../../../common/sidebar/Sidebar'

const UserRouter = () => {
  return (
    <>
        <Sidebar></Sidebar>
        <Routes>
            <Route path='/profile' element={<UserProfile></UserProfile>}></Route>
        </Routes>
    </>
  )
}

export default UserRouter