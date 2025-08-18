import React from 'react'
import Magnet from '../../Magnet'
import flowerImg from '../../../public/flower.webp'
import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Rotated image wrapper */}
            <div className="w-[300vw] h-[300vh] rotate-[21deg]">
                <Image
                    src={flowerImg}
                    alt="Background"
                    layout="fill"
                    objectFit="none"
                    priority
                />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex justify-center items-center w-full h-full">
                <Magnet padding={50} disabled={false} magnetStrength={3}>
                    <p className="text-white text-2xl font-bold">Star React Bits on GitHub!</p>
                </Magnet>
            </div>
        </div>
    )
}

export default Footer
