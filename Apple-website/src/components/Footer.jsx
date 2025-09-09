import React from 'react'
import { footerLinks } from '../constant'

const Footer = () => {
    return (
        <footer className='py-5 sm:px-10 px-5'>
            <div className='screen-max-width'>
                <div>
                    <p className='font-semibold text-gray text-xs'>
                        More ways to shops {''}
                        <span className='underline text-blue '>
                            Find an Apple store {''}
                        </span>
                        or{''}
                        <span className='underline text-blue '>
                            other retailer
                        </span>{''}
                        near you
                    </p>

                    <p className='font-semibold text-gray text-xs'>
                        or you can contact or call to this 8265838051
                    </p>
                </div>

                <div className='bg-gray my-5 h-[1px] w-full' />

                <div className='flex md:flex-row flex-col md:items-center justify-between '>
                    <p className='font-semibold text-gray text-xs '>
                        Copyright @ 2029 Apple Inc. All right reserved.
                    </p>
                    <div className='flex'>
                        {footerLinks.map((link, i) => (
                            <p key={link} className='font-semibold text-gray text-xs '>
                                {link}{''}
                                {i !== footerLinks.length - 1 && (
                                    <span className='mx-2' > | </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
