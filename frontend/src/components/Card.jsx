import React from 'react'
import {Link} from 'react-router';

const Card = ({ item, setData }) => {
  return (
    <Link to={`/post/${item._id}`} className='flex justify-center items-center'>
      <div className='w-[700px] h-[200px] md:h-[360px] bg-[#E8C4B8] rounded-3xl shadow-lg transition duration-300 hover:scale-105'>
        <div className='grid grid-cols-2 gap-1 md:gap-5 '>
          <div className=' ms-5 md:ms-[33px] mt-3.5 md:mt-[24px]'>
            <h2 className='text-[25px]  md:text-[35px] font-bold text-black line-clamp-1 '>{item.item}</h2>
            <h1 className='text-[44px] md:text-[54px] font-bold text-black -mt-2 md:-mt-0.5 line-clamp-1'>₹{item.price}</h1>
            <p className='hidden md:inline' >{item.type}</p>

            <div className="flex md:mt-2 md:mb-2">
  {Array.from({ length: item.rating }).map((_, i) => (
    <img key={i} src="/images/star (1).png" alt="star" className=' w-[16px] h-[16px] m-0.5'/>
  ))}
</div>
            <p className='line-clamp-1 hidden md:none'>{item.description}</p>
            <h3 className='font-mono text-[19px] md:text-[24px] mt-2 md:mt-4 ms-1.5 font-medium text-black line-clamp-1'>{item.location}</h3>
            <p className='font-mono text-[12px] md:text-[20px] md:mt-2 mt-1  ms-1.5 font-medium text-black mb-[24px] line-clamp-1'>Post by:{item.userName}</p>
          </div>
          <div>

            <img src={item.image} loading='lazy' className='w-full h-[200px] md:h-[360px] object-cover rounded-br-3xl rounded-tr-3xl'/>
          </div>
        </div>
      </div>
    </Link>
  )
}


export default Card