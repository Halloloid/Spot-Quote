import React from 'react'
import {Link} from 'react-router';

const Card = ({ item, setData }) => {
  return (
    <Link to={`/post/${item._id}`} className='flex justify-center items-center'>
      {/* <div className='w-[600px] h-[350px] bg-[#E8C4B8] '>
        <div className='grid grid-cols-2'>
          <div>
            <p>sdnsjnd</p>
          </div>
          <div>
          </div>
        </div>
      </div> */}
      <div className='w-[700px] h-[100%] bg-[#E8C4B8] rounded-3xl shadow-lg transition duration-300 hover:scale-105'>
        <div className='grid grid-cols-2 gap-5'>
          <div className=' ms-[53px] mt-[24px]'>
            <h2 className='text-[35px] font-bold text-black'>{item.item}</h2>
            <h1 className='text-[54px] font-bold text-black -mt-0.5'>₹{item.price}</h1>
            <p>{item.type}</p>

            <div className="flex mt-5 mb-2">
  {Array.from({ length: item.rating }).map((_, i) => (
    <img key={i} src="/images/star (1).png" alt="star" className=' w-[16px] h-[16px] m-0.5'/>
  ))}
</div>
            <p className='line-clamp-1'>{item.description}</p>
            <h3 className='font-mono text-[24px] mt-4 ms-1.5 font-medium text-black mb-[24px]'>{item.location}</h3>
          </div>
          <div>
            
            <img src={`http://localhost:5000${item.image}`} className='w-full h-full object-cover rounded-br-3xl rounded-tr-3xl'/>
          </div>
        </div>
      </div>
    </Link>
  )
}


export default Card