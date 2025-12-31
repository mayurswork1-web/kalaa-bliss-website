import Link from 'next/link'
import { Italianno } from "next/font/google";
import { Facebook, Instagram } from 'lucide-react';

const italianno = Italianno({
    subsets: ['latin'],
    weight: '400',
});

export default function Footer() {

    const emailAddress = "kalaa.bliss@gmail.com";
    const subject = "A heartful message";
    const href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}`;

    return (
        <div className='w-11/12 mx-auto flex flex-col gap-4 py-8'>
            <div className='flex justify-start md:justify-between flex-col md:flex-row md:gap-12 gap-8 '>
                <div>
                    <h3 className={`${italianno.className} text-4xl`}>Kalaa Bliss</h3>
                    <p className='text-gray-800 '>Animator and Illustrator, Crafting stories that connect brands with storytelling</p>
                    <span className='flex'>
                        <Link href="https://www.instagram.com/kalaa_bliss/" target="_blank" rel="noopener noreferrer" className='flex items-center mt-2'>
                            <Instagram className="inline-block w-5 h-5 mr-2" aria-hidden="true" />
                        </Link><Link href="https://www.facebook.com/people/KalaaBliss/61558847639841/" target="_blank" rel="noopener noreferrer" className='flex items-center mt-2'>
                            <Facebook className="inline-block w-5 h-5 mr-2" aria-hidden="true" />
                        </Link>
                    </span>
                </div>
                <div>
                    <h4 className={`${italianno.className} text-4xl`}>Navigate</h4>
                    <div className=" gap-2 md:gap-2 text-md mt-2 font-normal flex flex-col ">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/collaboration">Collaboration</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/connect">Connect</Link>
                    </div>
                </div>
                <div>
                    <h4 className={`${italianno.className} text-4xl`}  >Connect</h4>
                    <div className=" gap-2 text-gray-800 text-md font-normal flex flex-col ">
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2">
                            <span>
                                kalaa.bliss@gmail.com
                            </span>
                        </a>
                        <a
                            href="https://www.instagram.com/kalaa_bliss/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>@kalaa_bliss</span>
                        </a> <a
                            href="https://www.facebook.com/people/KalaaBliss/61558847639841/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>KalaaBliss</span>
                        </a>


                    </div>
                </div>
            </div>
            <hr className='text-gray-300' />
            <div className='mb-4'>
                <span> &#169; 2026 Kalaa Bliss, All Right Reserved</span>
                <p className='text-gray-800' > Crafted by Vaibhav</p>

            </div>
        </div >
    )
}