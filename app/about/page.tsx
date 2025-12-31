import Image from 'next/image'
import { Italianno } from "next/font/google";
import { Metadata } from "next";

const italianno = Italianno({
    subsets: ['latin'],
    weight: '400',
});

export const metadata: Metadata = {
    title: "About Khushbu Gupta - Kalaa Bliss | Animator & Illustrator",
    description: "Meet Khushbu Gupta, your own Kalaa Bliss. Professional animator and illustrator bringing joy through art, emotion, and animation. Specializing in visual narratives and brand collaborations.",
    keywords: ["Khushbu Gupta", "Kalaa Bliss", "animator", "illustrator", "digital animation", "traditional illustration", "brand collaborations", "visual storytelling"],
    authors: [{ name: "Khushbu Gupta" }],
    creator: "Khushbu Gupta",
    publisher: "Khushbu Gupta",
    openGraph: {
        title: "About Khushbu Gupta - Kalaa Bliss | Animator & Illustrator",
        description: "Professional animator and illustrator bringing joy through art, emotion, and animation. Crafting visual narratives that resonate with audiences.",
        type: "profile",
        locale: "en_US",
        siteName: "Kalaa Bliss",
        images: [
            {
                url: "/she.png",
                width: 331,
                height: 441,
                alt: "Khushbu Gupta - Animator and Illustrator portrait",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Khushbu Gupta - Kalaa Bliss",
        description: "Professional animator and illustrator bringing joy through art, emotion, and animation.",
        images: ["/she.png"],
        creator: "@yourtwitterhandle",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function About() {
    return (
        <div className=" py-12 px-4 md:px-0">
            <h1
                className={`${italianno.className} text-6xl md:text-7xl mb-4 flex justify-center`}
            >
                About Me
            </h1>

            <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-8 md:my-12 px-4 md:px-0">
                <div className='bg-pink-300 py-2 px-6 rounded-3xl'>
                    <Image
                        src="/she.png"
                        alt="Khushbu Gupta - Professional animator and illustrator portrait"
                        width={331}
                        height={441}
                        className="mx-auto"
                        priority
                    />
                    <span className="relative left-35 md:left-50 top-4 text-white font-semibold bg-[#BD7B5C] py-2 px-3 rounded-md z-50">
                        Animator & Illustrator
                    </span>
                </div>

                <div className="max-w-xl">

                    <p className="text-gray-700 text-lg mb-4">
                        About me
                    </p>
                    <h2
                        className="text-3xl my-4"
                    >I&apos;m <span className="text-[#BD7B5C] font-medium">Khushbu Gupta</span> your own Kalaa Bliss</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Brining Joy through Art, Emotion & Animation I believe every illustration should tell a story, and every animation should evoke emotion. My work sits at the intersection of art and strategy—visual narratives crafted to resonate with specific audiences while staying true
                    </p>

                    <p className="text-lg text-gray-700">

                        With a background in both traditional illustration and digital animation, I bring a unique perspective to brand collaborations.</p>
                </div>
            </section>


        </div>
    );
}