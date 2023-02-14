import React from 'react'
import {useTodolist} from './globalState/hook'
function ListComponent({list,onShowHandler}) {
  const [state] = useTodolist()
    return(
        <ul>
        
          {state.map((list,index)=><li key={index}>{list.name} is {list.veg+""} rating is {list.taste+""}  <button type="button" onClick={onShowHandler(true,list.id)}>Edit</button></li>)}
        </ul>
    )
}
export default React.memo(ListComponent)