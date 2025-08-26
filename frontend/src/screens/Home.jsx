import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router';
import { Plus } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, UserProfile } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
        const res = await axios.get('https://backend-of-spot-quote.onrender.com/api/testmonials')
        setData(res.data)
      } catch (error) {
        toast.error("Error fetching testimonials Reload Again");
        console.error("Error fetching testimonials:", error);
      } finally{
        setLoading(false);
      }
    }
     fetchCards()
  }, [])
  return (
    <>
    <nav className="sticky top-0 bg-[#E1C16E] z-50 shadow-lg flex items-center justify-between md:px-[48px] py-2 md:py-4 px-[12px]">
      <h1 className="text-2xl md:text-5xl font-extrabold p-[8px]">Spot Quote</h1>
      <div className='flex justify-between' >
        <button className="bg-[#E8C4B8] text-black px-4 py-2 rounded shadow transition duration-300 hover:scale-120 md:me-8 hidden md:inline " onClick={handleCreatePost}>Create Post +</button>
        <button className="bg-[#E8C4B8] text-black px-4 py-2 rounded shadow transition duration-300 hover:scale-120 me-4 md:hidden" onClick={handleCreatePost}><Plus/></button>
        <button className="bg-[#E8C4B8] text-black px-4 md:py-2 rounded shadow transition duration-300 hover:scale-120 text-[14px] md:text-[16px]  ">
          <SignedIn>
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <SignInButton/>
          </SignedOut>
        </button>
      </div>
    </nav>
    <div className='m-5 md:m-10'>
      { loading? <div className="flex items-center justify-center mt-60 md:mt-80">
  <div className="relative">
    <div className="w-16 h-16 rounded-full border-8 border-t-transparent border-[#dcb32b] animate-spin"></div>
    <div className="absolute inset-0 w-10 h-10 m-auto rounded-full border-6 border-t-transparent border-[#F4C2C2] animate-spin [animation-direction:reverse]"></div>
  </div>
</div>
 : <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {data.map(item => (
          <Card key={item._id} item={item} setData={setData}/>
        ))}
      </div>}
    </div>
    </>
  )
}

export default Home