import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const PostDetails = () => {

  const [detail,setDetail] = useState(null);
  const [loading,setLoading] = useState(true);

  const {id} = useParams();
  useEffect(()=>{
    const fetchitem = async() =>{
      try {
        const res = await axios.get(`https://backend-of-spot-quote.onrender.com/api/testmonials/${id}`);
        setDetail(res.data);
        
      } catch (error) {
        console.error("Error fetching post details:", error);
      }finally{
        setLoading(false);
      }
    };
    
    fetchitem();
  },[id])
  
  if(loading){
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

  return (
    <>
    <button onClick={() => window.history.back()} className='bg-[#E1C16E] rounded-4xl px-4 py-3 ms-3 mt-3 font-semibold transition duration-300 hover:scale-130'>Go Back</button>
    <div className='w-full flex justify-center'>
      <div className='w-[1150px] h-[650px]  bg-[#E8C4B8] rounded-4xl shadow-lg p-5'>
        <div className='grid grid-cols-2 gap-5 h-[60%]'>
          <img src ={detail.image} className='w-full h-[340px] object-cover rounded-4xl'/>
          <div>
            <h1 className='font-bold text-6xl mt-5 text-black'>{detail.item}</h1>
            <h1 className='font-bold text-3xl mt-5'>{detail.type}</h1>
            <h1  className='font-extrabold text-7xl mt-8 text-black'>₹{detail.price}</h1>
            <div className="flex mt-5 mb-2">
  {Array.from({ length: detail.rating }).map((_, i) => (
    <img key={i} src="/images/star (1).png" alt="star" className='w-[52px] h-[52px] m-1 '/>
  ))}
</div>
          </div>
        </div>
        <div className='m-5 flex flex-col'>
  <div className='mb-4 h-[100px]'>
    <p className='w-full h-full break-words p-4 text-[24px]'>{detail.description}</p>
  </div>
  <div className='mt-14'>
    <h1 className='text-[20px] font-semibold'>{detail.location}</h1>
    <h1 className='text-[20px] font-semibold'>Posted by: {detail.userName}</h1>
  </div>
</div>
      </div>
    </div>
    </>
  )
}

export default PostDetails