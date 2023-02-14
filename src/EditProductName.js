import React,{useState} from 'react'
 import {useDispatch} from 'react-redux'
 import {editProduct} from './globalState/action'
function ProductEdit({editedProduct,id}) {
  
const [name,inserName] = useState(editedProduct.name)
const [isVeg,setVeg] = useState(editedProduct.veg)
const [taste,setTaste] = useState(editedProduct.taste)
const editProductDisptach = useDispatch()
React.useEffect(()=>{
    inserName(editedProduct.name)
    setVeg(editedProduct.veg)
    setTaste(editedProduct.taste)

},[editedProduct])
const onHandleChangeName = (e) =>{
    inserName(e.target.value)
}
const onHandleChangeVeg = (e) =>{
    setVeg(!isVeg)
}
const onHandleSubmite=(e)=>{
    e.preventDefault()
    editProductDisptach(editProduct({product:{name:name,veg:isVeg,taste},id}))
}
const onHandleChangetaste= (e) =>{
   
    setTaste(e.target.value)
  }
    return(
<>
<div className="form">
     <form onSubmit={onHandleSubmite}>
     name:   <input value={name} type="text" onChange={onHandleChangeName} />
       veg :  <input name="veg" type="checkbox" onChange={onHandleChangeVeg} checked={isVeg}/>
        <fieldset name="taste" defaultChecked={taste} onChange={onHandleChangetaste}>
          <legend>taste</legend>
      <label>Normal :<input name="taste" type="radio"  checked={taste==="normal"} value="normal"/></label>  
      <label>medium :<input name="taste" type="radio" checked={taste==="medium"} value="medium"/></label>  
      <label>good :<input  name="taste" type="radio" checked={taste==="good"}  value="good"/></label>  
        </fieldset>
        <button>Edit</button>
     </form>
    </div>
</>
    )
}
export default ProductEdit;