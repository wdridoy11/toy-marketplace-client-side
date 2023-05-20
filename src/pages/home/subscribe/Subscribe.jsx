import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-slate-200 py-20'>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2'>
                <div className='mb-5'>
                    <h1 className='text-4xl font-semibold mb-2'>Subscribe Our Educational toy</h1>
                    <p className='text-lg text-black'>If you subscribe now, you can update all educational toy</p>
                </div>
                <div>
                    <form className='flex flex-col md:flex-row'>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full lg:max-w-md" />
                        <button className='py-3 px-5 bg-orange-400 text-white font-semibold text-base rounded-md mt-2 md:mt-0 md:ml-2'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe