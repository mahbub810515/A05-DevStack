import { FaStar } from "react-icons/fa"
import type { TechnologyType } from "../../types/TechnologyType"


export type TechnologyProps ={
    technology: TechnologyType   
    handleTechnologyStack:(technology:TechnologyType)=>void
    isAdded:boolean

}
const TechnologyCard = ({ technology,handleTechnologyStack,isAdded }: TechnologyProps) => {
    return (
        <div className="border-primary-black rounded border p-5">
            <div className="flex justify-between mb-3">
                <img className="w-10 h-10" src={technology.icon} alt="icon" />
                <button className="bg-slate-200 rounded-xl px-2">{technology.badge}</button>
            </div>
            <h2 className="font-bold text-lg mb-3">{technology.name}</h2>
            <p className="mb-4">{technology.description}</p>
            <div className="card-bottom">
                <div className="flex justify-between mb-4">
                    <p className="bg-slate-200 rounded-xl px-2">{technology.category}</p>
                    <p>{technology.difficulty}</p>
                    <p className="flex items-center gap-1"><FaStar className="text-amber-300" />{technology.rating}</p>
                </div>
                <button onClick={()=>handleTechnologyStack(technology)}
                 disabled={isAdded}
                 className={`w-full font-medium ${isAdded? "bg-gray-300 text-gray-500 cursor-not-allowed": "bg-black text-white"}
                    text-3 text-white rounded bg-slate-500 py-2 px-20`}
                 >{isAdded?"✓ Added":"Add To Stack"}</button>
            </div>

        </div>
    )
}

export default TechnologyCard
