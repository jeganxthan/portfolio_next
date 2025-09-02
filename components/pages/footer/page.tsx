import React from 'react'
import Magnet from '../../Magnet'
import flowerImg from '../../../public/flower.webp'
import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div className="absolute w-[300vw] h-[300vh] rotate-[21deg] top-0 left-0 z-0">
                <Image
                    src={flowerImg}
                    alt="Background"
                    layout="fill"
                    objectFit="none"
                    priority
                />
            </div>

            <div className="relative z-10 flex justify-center items-center w-full h-full">
                <Magnet padding={50} disabled={false} magnetStrength={3}>
                    <p className="text-white text-2xl font-bold">jegan4044@gmail.com</p>
                </Magnet>
            </div>
        </div>
    )
}

export default Footer
