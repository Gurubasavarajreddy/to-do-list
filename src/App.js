import React , {useState,useCallback} from 'react'
import './App.css';
import {useSelector} from 'react-redux'
import ListComponent from './ListComponent'
import ProductEdit from './EditProductName'
import AddProduct from './AddProduct'

function App() {
  const gList=useSelector((state)=>state)
const [isShow,setIsShow] = useState(false)
const [id,setId] = useState("")

const onShowModalHandler=useCallback((flag,id)=>()=>{
  setIsShow(flag)
  setId(id)
},[])
const  selectedProduct=React.useMemo(()=>gList.filter((d)=>{if(d.id===id)return d})[0],[id])
  return (
    <div className="App">
      <AddProduct />
      <div className='listContainer'>
     <ListComponent list={gList} onShowHandler={onShowModalHandler}/>
     </div>
     <div className='editContainer'>
      {isShow && <ProductEdit  id={id} editedProduct={selectedProduct} /> }
     </div>
    </div>
  );
}



export default App;
