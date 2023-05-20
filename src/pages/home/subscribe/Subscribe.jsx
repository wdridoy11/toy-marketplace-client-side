import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-slate-200 py-20'>
        <div className='container mx-auto'>
            <div className='w-1/2 mx-auto text-center'>
                <div className='mb-8'>
                    <h1 className='text-4xl font-semibold mb-2'>Subscribe Our Educational toy</h1>
                    <p className='text-lg text-black'>If you subscribe now, you can update all educational toy</p>
                </div>
                <div>
                    <form className='flex flex-col justify-center md:flex-row'>
                        <input type="email" name='email' className="input rounded-full bg-transparent border-black  placeholder:text-black input-bordered w-full lg:max-w-md" placeholder="Enter your email" required />
                        <button className='py-3 px-5 bg-transparent border border-black  text-black font-semibold text-base rounded-full mt-2 md:mt-0 md:ml-2'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe