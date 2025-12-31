"use client"

import { CldImage } from 'next-cloudinary';
import { useState, FormEvent } from 'react'
import { Italianno } from "next/font/google";
import { InstagramIcon, MailIcon } from 'lucide-react';
import Confetti from 'react-confetti';

const italianno = Italianno({
    subsets: ['latin'],
    weight: '400',
});

export default function Connect() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '' });

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        const form = event.currentTarget as HTMLFormElement;
        const formData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            const response = await fetch('/api/connect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {

                window.scrollTo({ top: 0, behavior: 'smooth' });

                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 5000);

                setToast({ show: true, message: 'Thankyou for your Message!' });
                setTimeout(() => setToast({ show: false, message: '' }), 5000);

                form.reset();
            }

            else {
                setToast({ show: true, message: 'Failed to send message. Please try again later.' });
                setTimeout(() => setToast({ show: false, message: '' }), 4000);
            }
        }
        catch (error) {
            console.error('Error submitting form:', error);
            setToast({ show: true, message: 'An error occurred. Please try again later.' });
            setTimeout(() => setToast({ show: false, message: '' }), 4000);
        }
        finally {
            setIsSubmitting(false);
        }
    }

    const emailAddress = "kalaa.bliss@gmail.com";
    // const subject = encodeURIComponent("A heartful message");
    const subject = "A heartful message";
    const href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}`;

    return (
        <div className='w-screen'>

            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={500}
                />
            )}

            {toast.show && (
                <div className="fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-xl transform transition-all duration-300 bg-linear-to-r from-pink-400 to-pink-500 text-white animate-slide-in">
                    <p className="font-medium">{toast.message}</p>
                </div>
            )}

            <div className="items-center flex flex-col p-12 min-w-screen">
                <h1 className={`${italianno.className} text-center text-6xl md:text-7xl mb-4 `} >Connect </h1>
                <p className='text-2xl text-gray-600 hidden'>A Showcase of my work</p></div>
            <div className={`bg-[url("/bg.png")] bg-cover bg-center min-h-screen w-full flex items-center justify-center`}>
                <div className="mx-16 inline-flex items-center justify-center gap-8 bg-white p-8 rounded-lg flex-col md:flex-row">
                    <div className="">
                        <CldImage
                            src="12_ml7zhq"
                            alt="Khushbu Gupta - Kalaa Bliss contact profile illustration"
                            className="rounded-lg"
                            width={346}
                            height={462}
                            crop="fill"
                            gravity="auto"
                            loading="lazy"
                            quality="auto:good"
                            format="auto"
                        />
                        <a
                            href="https://www.instagram.com/kalaa_bliss/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center"
                            aria-label="Follow Kalaa Bliss on Instagram">
                            <InstagramIcon aria-hidden="true" />
                            <span className="ml-2">@kalaa_bliss</span>
                        </a>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center"
                            aria-label="Email Kalaa Bliss">
                            <MailIcon aria-hidden="true" />
                            <span className="ml-2">
                                kalaa.bliss@gmail.com
                            </span>
                        </a>

                    </div>
                    <form
                        className="w-full max-w-md"
                        onSubmit={handleSubmit}
                        aria-label="Contact form" >
                        <div className="flex flex-col mb-6">
                            <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                                What&apos;s your sweet name?</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Enter Name'
                                disabled={isSubmitting}
                                required
                                aria-required="true"
                                className="rounded-lg bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                                What&apos;s your email address?</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Enter Email'
                                disabled={isSubmitting}
                                required
                                aria-required="true"
                                className="rounded-lg bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all"
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                                Share your thoughts</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                placeholder='Enter Message'
                                disabled={isSubmitting}
                                required
                                aria-required="true"
                                className="rounded-lg bg-gray-100 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            aria-disabled={isSubmitting}
                            className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >

                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div >
    )
}