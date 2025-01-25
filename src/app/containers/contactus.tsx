import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <div className='contactus mb-32 mt-36'>
        <div className='contactus-header'>
            <h1 className='text-[20px] sm:text-[28px] md:text-[32px] font-semibold text-center mb-6'>
                Contact Us
            </h1>
        </div>
        <div className='contactus-form flex flex-col items-center'>
            <form className="space-y-4 mt-8 w-full max-w-3xl px-4 sm:px-6">
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label htmlFor="first-name" className=" text-lg">First Name</label>
                        <input
                            type='text'
                            id="first-name"
                            placeholder=" "
                            className="border-[1px] border-black rounded-xl p-3 mt-1 focus:outline-none focus:border-blue-500 w-full"
                        />
                    </div>
    
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label htmlFor="second-name" className=" text-lg">Second Name</label>
                        <input
                            type='text'
                            id="second-name"
                            placeholder=" "
                            className="border-[1px] border-black rounded-xl p-3 mt-1 focus:outline-none focus:border-blue-500 w-full"
                        />
                    </div>
                </div>
    
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label htmlFor="email" className=" text-lg">Email</label>
                        <input
                            type='email'
                            id="email"
                            placeholder=" "
                            className="border-[1px] border-black rounded-xl p-3 mt-1 focus:outline-none focus:border-blue-500 w-full"
                        />
                    </div>
    
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label htmlFor="contact-number" className=" text-lg">Contact Number</label>
                        <input
                            type='number'
                            id="contact-number"
                            placeholder=" "
                            className="border-[1px] border-black rounded-xl p-3 mt-1 focus:outline-none focus:border-blue-500 w-full"
                        />
                    </div>
                </div>
    
                <div className="flex flex-col w-full">
                    <label htmlFor="message" className=" text-lg">Message</label>
                    <textarea
                        id="message"
                        placeholder=" "
                        className="border-[1px] border-black rounded-xl p-3 mt-1 focus:outline-none focus:border-blue-500 h-[150px] w-full"
                    ></textarea>
                </div>
    
                <button
                    type="submit"
                    className="bg-black rounded-xl text-white w-full text-center cursor-pointer py-2 mt-4  md:mt-0"
                >
                    Let's talk
                </button>
            </form>
        </div>
    </div>
    

    );
};

export default ContactUs;