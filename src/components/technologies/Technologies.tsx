import { use } from "react"
import type { TechnologyType } from "../../types/TechnologyType"

export type TechnologiesProps = {
    technologiesPromise: Promise<TechnologyType[]>
}


const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise)

    return (
        <div className="container mx-auto">
            <div className="mb-10">
                <h1 className='font-extrabold text-6xl pb-6'>Explore the<span className=' bg-linear-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent'>Technologies</span></h1>
                <p className='font-normal text-18px text-primary-black mb-2'>Pick one technology per category to build your ideal stack. </p>
            </div>
        </div>
    )
}

export default Technologies
