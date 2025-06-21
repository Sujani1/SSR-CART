import React from 'react'

const GallerySection = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Where Every Style Finds a Home</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">From handcrafted ethnic weaves to runway-inspired western fits, explore a gallery that celebrates every side of your style. Statement heels, casual kicks, boho bags, and bold accessories — each piece tells a story, and every scroll sparks inspiration.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/western.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Western Wear</h1>
            <p className="leading-relaxed">Sleek silhouettes and bold designs for your daily slay.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/tshirt.jpeg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">T-Shirts</h1>
            <p className="leading-relaxed">Tees that keep it comfy, casual, and effortlessly stylish.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/pant.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Pants & Trousers</h1>
            <p className="leading-relaxed">From tailored to relaxed, find your perfect fit here.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/ethic.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">EthicWear</h1>
            <p className="leading-relaxed">Celebrate culture with vibrant, handcrafted elegance.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/sport.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Sportswear</h1>
            <p className="leading-relaxed">Activewear that powers your every step, squat, and sprint.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="assets/wp.webp" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">New Season</h1>
            <p className="leading-relaxed">Discover what’s trending this season, first.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default GallerySection