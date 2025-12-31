//gallery/page.tsx

import ClientGallery from "./clientgallery";
import { Italianno } from "next/font/google";
import { Metadata } from "next";

const italianno = Italianno({
    subsets: ['latin'],
    weight: '400',
});

export const metadata: Metadata = {
    title: "Art Gallery - Animation & Illustration Portfolio | Kalaa Bliss",
    description: "Explore Kalaa Bliss's art gallery featuring animated reels, custom illustrations, brand work, and digital art. Browse 400k+ creative posts and animations by Khushbu Gupta.",
    keywords: ["art gallery", "animation portfolio", "illustration showcase", "digital art", "animated reels gallery", "custom illustrations", "artist portfolio", "Kalaa Bliss artwork", "Khushbu Gupta art"],
    authors: [{ name: "Khushbu Gupta" }],
    creator: "Khushbu Gupta",
    publisher: "Kalaa Bliss",
    openGraph: {
        title: "Art Gallery - Explore My Animation & Illustration Work",
        description: "Browse through a colorful collection of animations, illustrations, and brand collaborations. Discover the creative world of Kalaa Bliss.",
        type: "website",
        locale: "en_US",
        siteName: "Kalaa Bliss",
        images: [
            {
                url: "/main-img.png", // Update with a gallery preview image if available
                width: 1037,
                height: 401,
                alt: "Kalaa Bliss art gallery preview - animation and illustration showcase",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Art Gallery - Animation & Illustration Portfolio",
        description: "Explore the colorful world of Kalaa Bliss. Browse animated reels, custom illustrations, and creative artwork.",
        images: ["/main-img.png"],
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

export default function Gallery() {

    return (
        <div>
            <div className="items-center flex flex-col p-12">
                <h1 className={`${italianno.className} text-6xl md:text-7xl mb-4 `}> Gallery </h1>
                <p className='text-2xl text-gray-600 hidden'>A Showcase of my work</p>
            </div>
            <ClientGallery />
        </div>
    )
}