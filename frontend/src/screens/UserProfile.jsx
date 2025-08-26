import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import Card from '../components/Card';

const UserProfile = () => {
    const [userPost,setUserPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const {userId} = useParams();
    const navigate = useNavigate();
     const handleCreatePost = async () => {
    navigate('/create-post');
  }
    useEffect(()=>{
        const fetchUserPosts = async () => {
            try {
                const res = await axios.get(`https://backend-of-spot-quote.onrender.com/api/testmonials/user/${userId}`)
                setUserPost(res.data);
            } catch (error) {
                toast.error("Error fetching user posts. Please try again.");
                console.error("Error fetching user posts:", error);
            } finally{
                setLoading(false);
            }
        };
        fetchUserPosts();
    },[])
  return (
    <>
    <button onClick={() => window.history.back()} className='bg-[#E1C16E] rounded-4xl px-4 py-3 ms-3 mt-3 font-semibold transition duration-300 hover:scale-130'>Go Back</button>
    { (loading)?
     <div className="flex items-center justify-center mt-60 md:mt-80">
  <div className="relative">
    <div className="w-16 h-16 rounded-full border-8 border-t-transparent border-[#dcb32b] animate-spin"></div>
    <div className="absolute inset-0 w-10 h-10 m-auto rounded-full border-6 border-t-transparent border-[#F4C2C2] animate-spin [animation-direction:reverse]"></div>
  </div>
</div>
     
     : <div className='m-5 md:m-10'>
      { (userPost.length == 0)?
    <div className="flex flex-col items-center mt-60 md:mt-80 h-full gap-4">
  <h1 className="text-xl font-semibold">Create Your First Post for the Spot</h1>
  <button
    className="bg-[#E8C4B8] text-black px-4 py-2 rounded shadow transition duration-300 hover:scale-110"
    onClick={handleCreatePost}
  >
    Create
  </button>
</div>

 : <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {userPost.map(userPost => (
          <Card key={userPost._id} item={userPost} setData={setUserPost}/>
        ))}
      </div>}
    </div>}
    </>
  )
}

export default UserProfile