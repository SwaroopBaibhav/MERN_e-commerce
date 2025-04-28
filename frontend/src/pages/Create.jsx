import React from 'react'
import { useForm } from 'react-hook-form'
import { DBaddProduct } from '../controller/state.controller.js'
import { useNavigate } from 'react-router-dom'

function Create() {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    const item = {
        name: data.name,
        price: data.price,
        image: data.image,
    };
    const response = await DBaddProduct(item);
    if (response.success){
        reset();
        console.log('uploaded data to store');
        navigate('/')
    }
  }

  return (
    <div className='w-4xl mx-auto my-5 bg-slate-300 p-10 rounded-lg'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-center'>

        <div className='w-full'>
          <input
            type="text"
            placeholder='Iphone 12'
            {...register('name', { required: "This field is required" })}
            className='w-full border-2 rounded-md p-2'
          />
          <p className='text-sm text-red-500 h-4 mt-1'>
            {errors.name && "* This field is required"}
          </p>
        </div>

        <div className='w-full'>
          <input
            type="text"
            placeholder='Price'
            {...register('price', { required: "This field is required" })}
            className='w-full border-2 rounded-md p-2'
          />
          <p className='text-sm text-red-500 h-4 mt-1'>
            {errors.price && "* This field is required"}
          </p>
        </div>

        <div className='w-full'>
          <input
            type="text"
            placeholder='Image URL'
            {...register('image', { required: "This field is required" })}
            className='w-full border-2 rounded-md p-2'
          />
          <p className='text-sm text-red-500 h-4 mt-1'>
            {errors.image && "* This field is required"}
          </p>
        </div>

        <button className='w-fit p-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Create;
