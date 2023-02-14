import React from 'react'

function ListComponent({list,onShowHandler}) {
  
    return(
        <ul>
        
          {list.map((list,index)=><li key={index}>{list.name} is {list.veg+""} rating is {list.taste+""}  <button type="button" onClick={onShowHandler(true,list.id)}>Edit</button></li>)}
        </ul>
    )
}
export default React.memo(ListComponent)