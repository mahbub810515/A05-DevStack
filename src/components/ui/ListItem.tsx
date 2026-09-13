import type { NavItemTypes } from "../../types/NavItemType"


const ListItem = ({key,item}:{key:number,item:NavItemTypes}) => {
  return (
    <div className="hover:text-deep-pink">
        <li key={key}>{item.title}</li>
      
    </div>
  )
}

export default ListItem
