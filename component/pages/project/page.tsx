import React from 'react'
import Image from 'next/image'
import pro1 from '@/public/projects/pro1.webp'
import pro2 from '@/public/projects/pro2.webp'
import pro3 from '@/public/projects/pro3.webp'
import pro4 from '@/public/projects/pro4.webp'

const page = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-10">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        <div className="bg-white p-4 h-[600px] flex flex-col items-center relative">
          <span className="absolute -top-6 -left-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -top-6 -right-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -bottom-6 -left-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -bottom-6 -right-4 text-3xl font-extralight text-black z-10">+</span>

          <div className="relative h-[400px] w-full aspect-[4/5]">
            <Image
              src={pro1}
              alt="Project 1"
              fill
              className="object-fill"
              placeholder="blur"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">Project 1</h2>
            <p className="text-sm text-gray-600">Description of project 1.</p>
          </div>
        </div>


        {/* === PROJECT 2 === */}
         <div className="bg-white p-4 h-[600px] flex flex-col items-center relative">
          <span className="absolute -top-6 -left-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -top-6 -right-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -bottom-6 -left-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -bottom-6 -right-4 text-3xl font-extralight text-black z-10">+</span>

          <div className="relative h-[400px] w-full aspect-[4/5]">
            <Image
              src={pro2}
              alt="Project 1"
              fill
              className="object-fill"
              placeholder="blur"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">Project 1</h2>
            <p className="text-sm text-gray-600">Description of project 1.</p>
          </div>
        </div>

        {/* === PROJECT 3 === */}
         <div className="bg-white p-4 h-[600px] flex flex-col items-center relative">
          <span className="absolute -top-6 -left-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -top-6 -right-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -bottom-6 -left-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -bottom-6 -right-4 text-3xl font-extralight text-black z-10">+</span>

          <div className="relative h-[400px] w-full aspect-[4/5]">
            <Image
              src={pro3}
              alt="Project 1"
              fill
              className="object-fill"
              placeholder="blur"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">Project 1</h2>
            <p className="text-sm text-gray-600">Description of project 1.</p>
          </div>
        </div>

        {/* === PROJECT 4 === */}
         <div className="bg-white p-4 h-[600px] flex flex-col items-center relative">
          <span className="absolute -top-6 -left-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -top-6 -right-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -bottom-6 -left-4 text-3xl font-extralight text-black z-10">+</span>
          <span className="absolute -bottom-6 -right-4 text-3xl font-extralight text-black z-10">+</span>

          <div className="relative h-[400px] w-full aspect-[4/5]">
            <Image
              src={pro4}
              alt="Project 1"
              fill
              className="object-fill"
              placeholder="blur"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">Project 1</h2>
            <p className="text-sm text-gray-600">Description of project 1.</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default page
