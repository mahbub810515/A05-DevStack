import type { TechnologyType } from "../../types/TechnologyType"
export type stackItemProps = {
    stackItem: TechnologyType
    handleTechnologyStack:(technology:TechnologyType)=>void

}

const YourStackCard = ({ stackItem,handleTechnologyStack }: stackItemProps) => {
    return (
        <div className="flex justify-between items-center border border-primary-black rounded p-2 mb-2">
            <div className="flex items-center gap-2">
                <img className="w-8 h-8" src={stackItem.icon} alt="icom" />
                <div>
                    <h2 className="font-bold text-2xl">{stackItem.name}</h2>
                    <p>{stackItem.category}</p>
                </div>
            </div>
            <button onClick={()=>handleTechnologyStack(stackItem)} className="text-3xl">X</button>

        </div>
    )
}

export default YourStackCard
