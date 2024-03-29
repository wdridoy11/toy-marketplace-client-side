import React, { useRef } from 'react'
import ContactImg from '../../assets/contact.png';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();
    const handleRegistration=(event)=>{
        event.preventDefault();
        const formData = event.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const phone = formData.phone.value;
        const message = formData.message.value;
        emailjs.sendForm(process.env.REACT_APP_EMAIL_services, process.env.REACT_APP_EMAIL_template, form.current, process.env.REACT_APP_EMAIL_public_key)
        .then((result) => {
            if(result.text === "Ok"){
                Swal.fire(
                    'Congratulation!',
                    'Email sent successfully',
                    'success'
                  )
            }
            console.log(result.text);
            formData.reset();
        }, (error) => {
            console.log(error.text);
        });
    }


  return (
    <div className='pt-20 pb-32'>
        <div className='container mx-auto'>
            <h1 className='text-5xl font-semibold text-center mb-10'>Contact Us</h1>
            <div className='grid grid-cols-2 items-center gap-5'>
                <div>
                    <img src={ContactImg} alt="Contact" />
                </div>
                <div>
                    <form ref={form} onSubmit={handleRegistration}>
                        <input className='w-full border border-[#ddd] mb-3 py-3 px-5 rounded-md text-base outline-none' type="text" name="name" id="name" placeholder='Enter your name' required/>
                        <input className='w-full border border-[#ddd] mb-3 py-3 px-5 rounded-md text-base outline-none' type="email" name="email" id="email" placeholder='Enter your email' required/>
                        <input className='w-full border border-[#ddd] mb-3 py-3 px-5 rounded-md text-base outline-none' type="tel" name="phone" id="phone" placeholder='Enter your phone'/>
                        <textarea name="message" className='textarea textarea-bordered border-[#ddd] rounded-md w-full' id="message" cols="30" rows="5" placeholder='Message'></textarea>
                        <button className='btn text-white bg-orange-400 hover:bg-black duration-500 w-full border-0 mt-5 mb-4 rounded-lg'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact