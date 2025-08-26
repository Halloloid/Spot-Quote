import React from 'react'
import Hero from './screens/Hero'
import { Navigate, Route, Routes } from 'react-router'
import Home from './screens/Home'
import CreatePost from './screens/CreatePost'
import PostDetails from './screens/PostDetails'
import { SignIn, SignOutButton, useUser,SignUp } from '@clerk/clerk-react'
import UserProfile from './screens/UserProfile'






const App = () => {

  function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
}
  return (

    <div>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create-post' element={
          <ProtectedRoute>
            <CreatePost/>
          </ProtectedRoute>
        }/>
        <Route path='/post/:id' element={<PostDetails/>}/>
        <Route path="/sign-in/*" element={<div className='flex w-full h-full justify-center mt-28'><SignIn routing="path" path="/sign-in"  /></div>} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route path='/userProfile/:userId' element={<ProtectedRoute>
          <UserProfile/>
        </ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App