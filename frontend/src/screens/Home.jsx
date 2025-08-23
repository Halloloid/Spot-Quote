import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, UserProfile } from '@clerk/clerk-react';

const Home = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

  const navigate = useNavigate();

  const handleCreatePost = async () => {
    navigate('/create-post');
  }

  useEffect(()=>{
    const fetchCards = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/testmonials')
        setData(res.data)
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally{
        setLoading(false);
      }
    }
     fetchCards()
  }, [])
  return (
    <>
    <nav className="sticky top-0 bg-[#E1C16E] z-50 shadow-lg flex items-center justify-between px-[48px] py-3">
      <h1 className="text-4xl font-extrabold p-[8px]">Spot Quote</h1>
      <div >
        <button className="bg-[#E8C4B8] text-black px-4 py-2 rounded shadow transition duration-300 hover:scale-120 me-8" onClick={handleCreatePost}>Create Post +</button>
        <button className="bg-[#E8C4B8] text-black px-4 py-2 rounded shadow transition duration-300 hover:scale-120">
          <SignedIn>
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <SignInButton/>
          </SignedOut>
        </button>
        <button className="transition duration-300 hover:scale-160 ms-8 scale-150">
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </button>
      </div>
    </nav>
    <div className='m-10'>
      { loading? <div>Loading..</div> : <div className='grid grid-cols-2 gap-8'>
        {data.map(item => (
          <Card key={item._id} item={item} setData={setData}/>
        ))}
      </div>}
    </div>
    </>
  )
}

export default Home