import { use, useState } from "react"
import type { TechnologyType } from "../../types/TechnologyType"
import TechnologyCard from "./TechnologyCard"
import YourStackCard from "./YourStackCard"
import { toast, ToastContainer } from "react-toastify"

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
            toast.success("technology remove from stack");
        } else {
            const newTechnologyStack = [...technologyStack, technology];
            setTechnologyStack(newTechnologyStack)
            toast.success("technology added to stack");
        }
    }

    return (
        <div className="container mx-auto px-4 py-10 sm:px-6 md:px-8">

  {/* Section Header */}
  <div className="mb-8 md:mb-10">
    <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:pb-6 md:text-6xl">
      Explore the{" "}
      <span className="bg-linear-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
        Technologies
      </span>
    </h1>

    <p className="mt-3 text-sm font-normal text-primary-black sm:text-base md:text-[18px]">
      Pick one technology per category to build your ideal stack.
    </p>
  </div>

  {/* Main Content */}
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr] lg:gap-8">

    {/* Technology Cards */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          handleTechnologyStack={handleTechnologyStack}
          isAdded={technologyStack.includes(technology)}
        />
      ))}
    </div>

    {/* Your Stack */}
    <div className="self-start rounded-2xl border border-slate-200 p-4 lg:sticky lg:top-6">

      <h2 className="text-xl font-bold sm:text-2xl">
        Your Stack
      </h2>

      <h3 className="mb-3 text-sm text-gray-600">
        {technologyStack.length} Technology Selected
      </h3>

      {/* Stack Items */}
      <div className="space-y-3">
        {technologyStack.map((stackItem) => (
          <YourStackCard
            key={stackItem.id}
            stackItem={stackItem}
            handleTechnologyStack={handleTechnologyStack}
          />
        ))}
      </div>

      {/* Remove All */}
      <button
        onClick={() =>{setTechnologyStack([]); toast.success("Technology stack cleared!");}}
        
        disabled={technologyStack.length === 0}
        className="mt-4 w-full rounded-[10px] border border-red-400 py-2 text-[14px] font-bold text-red-400 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>

    </div>
  </div>
  <ToastContainer/>
</div>
    )
}

export default Technologies
