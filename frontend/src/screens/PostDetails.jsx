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
    <div className='mx-4 my-3 md:mx-0 md:my-0 md:w-full flex justify-center'>
      <div className='w-full md:w-[1150px] h-full md:h-[650px]  bg-[#E8C4B8] rounded-4xl shadow-lg p-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 h-[60%]'>
          <img loading='lazy' src ={detail.image} className='w-full md:h-[340px] object-cover rounded-4xl'/>
          <div>
            <h1 className='font-bold text-4xl break-words md:text-6xl md:mt-5 text-black'>{detail.item}</h1>
            <h1 className='font-bold text-2xl break-words md:text-3xl ms-1 mt-3 md:mt-5'>{detail.type}</h1>
            <h1  className='font-extrabold text-6xl md:text-7xl mt-3 md:mt-8 text-black'>₹{detail.price}</h1>
            <div className="flex mt-2 md:mt-5 mb-2">
  {Array.from({ length: detail.rating }).map((_, i) => (
    <img key={i} src="/images/star (1).png" alt="star" className='w-[20px] h-[20px] md:w-[52px] md:h-[52px] md:m-1 m-0.5 '/>
  ))}
</div>
          </div>
        </div>
        <div className='mt-1 md:mt-0 m-2 md:m-5 flex flex-col'>
  <div className='mb-2 md:mb-4 md:h-[100px]'>
    <p className='w-full h-full break-words md:p-4 text-[20px] md:text-[24px]'>{detail.description}</p>
  </div>
  <div className='md:mt-14'>
    <h1 className='text-[20px] break-words font-semibold'>{detail.location}</h1>
    <h1 className='text-[20px] break-words font-semibold'>Posted by: {detail.userName}</h1>
  </div>
</div>
      </div>
    </div>
    </>
  )
}

export default PostDetails