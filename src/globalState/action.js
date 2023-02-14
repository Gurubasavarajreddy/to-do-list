export function getTodoList(){
    return {
        type:"LIST"
    }
}
export function addTodoList(payload){
    return {
        type:"ADD",
        payload
    }
}
export function editProduct(payload){

    return {
        type:"EDIT",
        product:payload.product,
       id: payload.id
    }
}