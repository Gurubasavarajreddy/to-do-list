import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodoList} from './globalState/action'
import {useTodolist} from './globalState/hook'

function AddProduct({addProducthandler}) {
const [state,dispatchar] = useTodolist()
const [name,inserName] = useState("")
const [isVeg,setVeg] = useState(false)
const [taste,setTaste] = useState("good")

const onHandleChangeName = (e) =>{
    inserName(e.target.value)
}
const onHandleChangeVeg = (e) =>{
    setVeg(!isVeg)
}
const onHandleChangetaste= (e) =>{
  
  setTaste(e.target.value)
}
const onHandleSubmite=(e)=>{
    e.preventDefault()
    dispatchar(addTodoList({name:name,veg:isVeg, id:new Date().getMilliseconds()+"",taste:taste}))

    inserName('')
    setVeg(false)
    setTaste("")
}
  return (
    <div className="form">
     <form onSubmit={onHandleSubmite}>
      name:  <input value={name} type="text" onChange={onHandleChangeName} />

    veg:  <input name="veg" type="checkbox" onChange={onHandleChangeVeg} checked={isVeg}/>
      
        <fieldset name="taste"  onChange={onHandleChangetaste} value={taste}>
          <legend>taste</legend>
          <label>Normal :<input name="taste" type="radio"  value="normal"/></label>  
      <label>medium :<input name="taste" type="radio" value="medium"/></label>  
      <label>good :<input  name="taste" type="radio"  value="good"/></label>  
        </fieldset>
        <button>add</button>
     </form>
    </div>
  );
}

export default React.memo(AddProduct);
