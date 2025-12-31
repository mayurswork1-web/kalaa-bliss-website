// app/clientgallery.tsx

'use client'

import { useState } from 'react'
import { CldImage, getCldImageUrl } from 'next-cloudinary';
import { Download } from 'lucide-react';

export default function ClientGallery() {

    const images = [

        '2_xtfpbk',
        '1_wf8ahu',
        '3_ryhctg',
        '6_xiir4n',
        '5_q0e8h9',
        '7_gsxry0',
        '8_cvij5r',
        '10_crct9o',
        '9_pkizcd',
        '11_ocrmu3',
        '12_ml7zhq',
        '13_szumsb',
        '14_g4khmu',
        '15_gkjljn',
        '17_ydwbtd',
        '16_qkd3so',
        '18_qhpz8t',
        '21_aegob4',
        '20_eyojyg',
        '19_so25nh',
        '22_sotgwc',
        '23_tcbf75',
        '24_ciklsm',
        '26_kwynz9',
        '27_tncwvd',
        '28_djzzqj',
        '25_j1s5aw'
    ];

    const [activeImg, setActiveImg] = useState<string | null>(null);

    const downloadImage = async (e: React.MouseEvent, publicId: string) => {
        e.stopPropagation(); // Prevents the modal from closing when clicking download

        try {
            const url = getCldImageUrl({
                src: publicId,
                quality: 'default',
            });

            const response = await fetch(url);
            const blob = await response.blob();

            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `image-${publicId}.jpg`; // Set desired filename
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        }

        catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download image.');
        }
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 masonry mb-8 w-19/20 mx-auto">
                {images.map((publicId, index) => (
                    <div
                        key={index}
                        className="transform hover:scale-[1.05] transition-transform duration-200 ease-in-out"
                        onClick={() => setActiveImg(publicId)}
                    >
                        <CldImage
                            src={publicId}
                            alt={`Gallery Image ${index + 1}`}
                            width={487}
                            height={647}
                            crop="fill"
                            gravity="auto"
                            loading="lazy"
                            quality="auto:good"
                            format="auto"
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>

            {activeImg && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setActiveImg(null)}>
                    <div
                        className="relative max-w-6xl rounded-lg"
                        onClick={(e) => e.stopPropagation()}>
                        <CldImage
                            src={activeImg}
                            alt="Enlarged Image"
                            width={487}
                            height={647}
                            // crop="limit"
                            quality="auto:best"
                            format="auto"
                            className="rounded-lg w-full h-screen object-contain"
                        />
                        <button className="absolute top-10 md:top-2 right-4 text-shadow-sm text-white text-3xl font-bold"
                            onClick={() => setActiveImg(null)}
                            aria-label="Close"
                        >&times;</button>
                        <button className="absolute bottom-12 md:bottom-4 text-shadow-xl right-4 text-white text-3xl font-bold"
                            onClick={(e) => downloadImage(e, activeImg)}>
                            <Download />
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}