import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Hero = () => {

  const navigate = useNavigate()
  const navigateHome = async () =>{
    navigate('/home');
  }
  
  return (
    <div id = 'hero'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
          <img src='/images/heroimg.png' className='md:h-[100vh] w-full opacity-25 md:opacity-100' />
        </div>
        <div className='absolute md:relative col-span-2 mt-[160px] md:mt-[26px]'>
          <h1 className='title '>Spot</h1>
          <h1 className='title'>Quote</h1>
          <div className='mt-[24px]'>
            <p className='quote'>Every place has a story - and a price.</p>
            <p className='quote'>Tell yours.</p>
            <div className='mt-3 ms-25 md:ms-3' onClick={navigateHome}>
              <button className='bg-[#E1C16E] rounded-4xl text-[24px] w-[177px] h-[58px] font-semibold shadow-2xl transition duration-500 hover:scale-120'>Explore -</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero