import Image from 'next/image'

function Hero() {
  return (
    <>
        <div id="hero_area">
            <div className="container grid grid-cols-2 justify-between items-center min-h-[800px] gap-10">
                <div className="content_area relative">
                    <h2 className='text-7xl font-semibold leading-snug'>Business <br /> Technology</h2>
                    <h4 className='text-pColor text-xl font-medium my-[40px]'>Consulting, Implementation, & Support</h4>
                    <p className='text-slate-400 font-medium text-lg'>Want to add MORE VALUE to your business with better technology? You’ve come to the right place.</p>
                    <a href='#' className="get_started_bth p-5 border-2 border-pColor flex justify-center items-center flex-col rounded-full absolute w-[140px] h-[140px] text-lg top-16 right-0"><span>Get <Image className='inline-block' src='/images/arrow-up.svg' width={20} height={20} alt='arrow' /></span> Started</a>
                </div>
                <div className="image_area">
                    <Image className='hero_image select-none pointer-events-none' src="/images/hero-bg.png" width={550} height={550} alt='hero image'/>
                </div>
                {/* color effects */}
                <span className='w-[500px] h-[500px] pointer-events-none bg-[#0e2d5486] -z-1 absolute top-[10%] left-0 blur-[123px]'></span>
                <span className='w-[500px] h-[500px] pointer-events-none bg-[#0e2d5448] -z-1 absolute bottom-[0%] right-0 blur-[123px]'></span>
            </div>
        </div>
    </>
  )
}

export default Hero