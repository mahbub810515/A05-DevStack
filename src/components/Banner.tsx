import bannerImage from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="flex justify-between items-center container mx-auto pt-24 ">
            <div>
                <h1 className='font-extrabold text-6xl pb-6'>Build Your Ideal <br /><span className=' bg-linear-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='font-normal text-18px text-primary-black mb-2'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack <br /> that fits your next project.</p>
                <div className='flex gap-2'>
                    <button className='text-white bg-linear-to-r from-orange-500 to-purple-500 rounded p-2'>Explore Technologies</button>
                    <button className='font-semibold text-14px text-primary-black border border-primary-black rounded p-2'>Learn More</button>
                </div>
            </div>
            <img src={bannerImage} alt="banner image" />

        </div>
    )
}

export default Banner