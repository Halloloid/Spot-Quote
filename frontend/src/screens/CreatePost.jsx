import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import toast, { LoaderIcon } from 'react-hot-toast';
import axios from 'axios'


const CreatePost = () => {
    const [type,setType] = useState("");
    const [item,setItem] = useState("");
    const [price,setPrice] = useState("");
    const [rating,setRating] = useState("");
    const [description,setDescription] = useState("");
    const [location,setLocation] = useState("");
    const [image,setImage] = useState("");

    const navigate = useNavigate();

   const handelSubmit = async (e) =>{
    e.preventDefault()

    if(!type.trim() || !item.trim() || !price.trim() || !rating.trim() || !description.trim() || !location.trim()){
        toast.error("Please fill all fields");
        return;
    }

    // try {
    //     await axios.post('http://localhost:5000/api/testmonials', {
    //         type,
    //         item,
    //         price,
    //         rating,
    //         description,
    //         location,
    //         image
    //     });
    //     toast.success("Testimonial created successfully");
    //     navigate('/home');
    // } catch (error) {
    //     console.error("Error creating testimonial:", error);
    // } 
    try {
  const formData = new FormData();
  formData.append("type", type);
  formData.append("item", item);
  formData.append("price", price);
  formData.append("rating", rating);
  formData.append("description", description);
  formData.append("location", location);
  formData.append("image", image); // <-- file from input

  await axios.post("http://localhost:5000/api/testmonials", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  toast.success("Testimonial created successfully");
  navigate("/home");
} catch (error) {
  console.error("Error creating testimonial:", error);
}


   }

   const goback = async (e) =>{
    navigate('/home');
   }

  return (
    <div>
        
        <div className='flex justify-center items-center mt-[16px]'>
            <div className='w-[90%] rounded-2xl bg-[#E1C16E]  p-2 my-10 '>
                <h1 className='text-[64px] font-custom ms-2 text-[#628ea9] bg-[#B7C9A8] border-b-[0.5px]  rounded-2xl text-center'>Create Post</h1>
                <form onSubmit={handelSubmit} className='mt-2'>
                    <div className='grid grid-cols-2 gap-1.5'>
                    <div>
                    <div className='m-2'>
                    <label className='text-[32px] font-custom'>Type</label><br/>
                    <input
                    value={type}
                    type='text'
                    placeholder='Enter type'
                    className='border-[0.4px] rounded-sm p-1 text-[16px] w-full'
                    onChange={(e) => setType(e.target.value)}
                    //required
                    />
                    </div>
                    <div className='m-2'>
                    <label className='text-[32px] font-custom '>Item</label><br/>
                    <input
                    value={item}
                    type='text'
                    placeholder='Enter item'
                    className='border-[0.4px] rounded-sm p-1 text-[16px] w-full'
                    onChange={(e) => setItem(e.target.value)}
                    //required

                    />
                    </div>
                    <div className='m-2'>
                    <label className='text-[32px] font-custom '>Price</label><br/>
                    <input
                    value={price}
                    type='number'
                    placeholder='Enter price'
                    className='border-[0.4px] rounded-sm p-1 text-[16px] w-full'
                    onChange={(e) => setPrice(e.target.value)}
                    //required

                    />
                    </div>
                    </div>
                    <div className='m-2'>
                        <label className='text-[32px] font-custom '>Image</label><br/>
                        <h2 className='text-[16px]'>*Use JPG or PNG file</h2>
                        <input
                        type='file'
                        className='border-[0.4px] rounded-sm p-1 text-[16px] w-full'
                        onChange={(e) => {
  setImage(e.target.files[0]); // keep file object
}}
                        accept='image/*'
                        />
                        {image && (
  <img src={URL.createObjectURL(image)} alt="Preview" className="w-full rounded shadow border-[0.5px]" />
)}
                    </div>
                    </div>
                    <div className='m-2'>
                    <label className='text-[32px] font-custom '>Rating</label><br/>
                    <input
                    value={rating}
                    type='number'
                    max='5'
                    min='0'
                    className='border-[0.4px] rounded-sm p-1 text-[16px] w-full'
                    onChange={(e) => setRating(e.target.value)}
                    //required

                    />
                    </div>
                    <div className='m-2'>
                    <label className='text-[32px] font-custom '>Description</label><br/>
                    <textarea
                    value={description}
                    className='textarea textarea-bordered h-20 w-full border-[0.4px] rounded-sm  text-[16px] p-1'
                    onChange={(e) => setDescription(e.target.value)}
                    />

                    </div>
                    <div className='m-2'>
                    <label className='text-[32px] font-custom '>Location</label><span className='ms-4'>*paste the Google map location link</span><br/>
                    <input
                    value={location}
                    type='text'
                    className='border-[0.4px] rounded-sm p-1 text-[16px] w-full'
                    onChange={(e) => setLocation(e.target.value)}
                    />
                    </div>

                    <div className='grid grid-cols-2 gap-5 mt-10'>
                        <button type='submit' className='btn btn-primary w-full h-[50px] text-[32px] font-custom rounded-2xl bg-[#7D8A92] hover:bg-[#B7C9A8] text-white'>
                            Submit
                        </button>
                        <button type='button' onClick={goback} className='btn btn-primary w-full text-[32px] font-custom rounded-2xl border hover:bg-[#B7C9A8] text-white'>
                            Cancel
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreatePost