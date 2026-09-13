import { use, useState } from "react"
import type { TechnologyType } from "../../types/TechnologyType"
import TechnologyCard from "./TechnologyCard"
import YourStackCard from "./YourStackCard"

export type TechnologiesProps = {
    technologiesPromise: Promise<TechnologyType[]>
}


const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise)
    const [technologyStack, setTechnologyStack] = useState<TechnologyType[]>([]);

    const handleTechnologyStack = (technology: TechnologyType): void => {
        
        if (technologyStack.includes(technology)) {
            const newTechnologyStack=technologyStack.filter(t=>t!==technology)
            setTechnologyStack(newTechnologyStack)
        } else {
            const newTechnologyStack = [...technologyStack, technology];
            setTechnologyStack(newTechnologyStack)
        }
    }

    return (
        <div className="container mx-auto">
            <div className="mb-10">
                <h1 className='font-extrabold text-6xl pb-6'>Explore the<span className=' bg-linear-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent'>Technologies</span></h1>
                <p className='font-normal text-18px text-primary-black mb-2'>Pick one technology per category to build your ideal stack. </p>
            </div>
            <div className="grid grid-cols-[3fr_1fr] gap-2">
                <div className="grid grid-cols-3 gap-4 border-primary-black">
                    {technologies.map(technology => <TechnologyCard
                        technology={technology}
                        handleTechnologyStack={handleTechnologyStack}
                        isAdded={technologyStack.includes(technology)}
                    />)}
                </div>
                <div className="self-start border rounded-2xl p-2">
                    <h2 className="font-bold text-2xl">Your Stack</h2>
                    <h3 className="mb-2">{technologyStack.length} Technology Selected</h3>
                    {technologyStack.map(stackItem=><YourStackCard 
                    stackItem={stackItem}
                    handleTechnologyStack={handleTechnologyStack}                    
                    />)}
                <button onClick={()=>setTechnologyStack([])} className="w-full font-bold text-[14px] text-red-400 border border-red-400 rounded-[10px] mt-4 py-2">Remove All</button>
                </div>
            </div>

        </div>
    )
}

export default Technologies
