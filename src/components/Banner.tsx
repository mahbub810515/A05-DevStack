import bannerImage from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-5 pt-10 md:flex-row md:gap-8 md:px-8 md:pt-24">

            {/* Hero Content */}
            <div className="w-full md:w-1/2">

                <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:pb-6 md:text-6xl">
                    Build Your Ideal <br />

                    <span className="bg-linear-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="mb-5 mt-4 text-sm font-normal leading-6 text-primary-black sm:text-base md:text-[18px] md:leading-7">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                    <button className="rounded bg-linear-to-r from-orange-500 to-purple-500 px-4 py-2.5 text-sm font-medium text-white sm:px-5 sm:py-3">
                        Explore Technologies
                    </button>

                    <button className="rounded border border-primary-black px-4 py-2.5 text-sm font-semibold text-primary-black sm:px-5 sm:py-3">
                        Learn More
                    </button>
                </div>

            </div>

            {/* Hero Image */}
            <div className="flex w-full justify-center md:w-1/2 md:justify-end">
                <img
                    src={bannerImage}
                    alt="Development stack illustration"
                    className="w-full max-w-[420px] object-contain sm:max-w-[500px] md:max-w-[550px]"
                />
            </div>

        </div>
    )
}

export default Banner