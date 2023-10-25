import { Link } from '@mui/material';
import React from 'react'
import ContactImg from '../../assets/contact.png'
const Contact = () => {

    const handleRegistration=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        // emailjs.sendForm('YOUR_EMAIL_SERVICE_NAME', 'YOUR_EMAIL_TEMPLATE_NAME', e.target, 'YOUR_USER_ID')
        // .then((result) => {
        //   this.setState({isAlertVisible: true})
        // }, (error) => {
        //   console.log(error.text);
        // });
    }


  return (
    <div className='py-20 bg-[#F8F8F8]'>
        <div className='container mx-auto'>
            <h1 className='text-5xl font-semibold text-center mb-10'>Contact Us</h1>
            <div className='grid grid-cols-2 items-center gap-5'>
                <div>
                    <img src={ContactImg} alt="Contact" />
                </div>
                <div>
                    <form onSubmit={handleRegistration}>
                        <input className='w-full border border-[#ddd] mb-3 py-3 px-5 rounded-md text-base outline-none' type="text" name="name" id="name" placeholder='Enter your name' required/>
                        <input className='w-full border border-[#ddd] mb-3 py-3 px-5 rounded-md text-base outline-none' type="email" name="email" id="email" placeholder='Enter your email' required/>
                        <input className='w-full border border-[#ddd] mb-3 py-3 px-5 rounded-md text-base outline-none' type="tel" name="phone" id="phone" placeholder='Enter your phone'/>
                        <textarea name="message" className='textarea textarea-bordered border-[#ddd] rounded-md w-full' id="message" cols="30" rows="5" placeholder='Message'></textarea>
                        <button className='btn text-white bg-orange-400 w-full border-0 mt-5 mb-4 rounded-lg'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact