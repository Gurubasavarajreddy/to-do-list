import { createSlice } from "@reduxjs/toolkit";
export const initialState =[{
    name:"burger",
    veg:true,
    id:"1",
    taste:"normal"
  },{
    name:"pizza",
    veg:false,
    id:"2",
    taste:"medium"
  },{
    name:"kajumasala",
    veg:true,
    id:"3",
    taste:"good"
  }]
const todoreducer = createSlice({
    initialState,
    name:"todo",
    reducers:{
        getTodoList : (state,action)=>{
            return state.list;
        },
        addTodoList : (state,action)=>{
            console.log('s',action)
           return state = [...state,action.payload];
        },
        editProduct: (state,action)=>{
           
              state = state.map((p)=>{
                if(p.id===action.payload.id){
                  return {...p,...action.payload.product}
                }else
                return p
              })
              return state
        }
    }
})
export const {getTodoList,addTodoList,editProduct}=todoreducer.actions

export default todoreducer.reducer