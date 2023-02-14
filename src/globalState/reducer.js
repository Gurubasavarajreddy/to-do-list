import { createReducer } from "@reduxjs/toolkit";
import {getTodoList,addTodoList,editProduct} from './action'
export const intstialState =[{
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
export  const todoReducer =  createReducer(intstialState,{
    [getTodoList.type] : (state,action)=>{
        return state.list;
    },
    [addTodoList.type] : (state,action)=>{
        console.log('s',action)
       return state = [...state,action.payload];
    },
    [editProduct.type] : (state,action)=>{
       
          state = state.map((p)=>{
            if(p.id===action.payload.id){
              return {...p,...action.payload.product}
            }else
            return p
          })
          return state
    }
}) 


