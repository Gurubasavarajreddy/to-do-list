
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
export function todoReducer(state,action) {

    switch(action.type){
        case "ADD" :
            console.log([...state,action.payload])
           return [...state,action.payload];
   
        case "LIST" :
            return state.list;
         case "EDIT" :
                const updatedList = state.map((p)=>{
                    if(p.id===action.id){
                      return {...p,...action.product}
                    }else
                    return p
                  })
                  return updatedList
        default :
        return state
    }
   
}
