export const addcart = ()=>{
    return{
        type: "ADDITEM",
        payload: product
    }
}

export const delcart = ()=>{
    return{
        type: "DELITEM",
        payload: product
    }
}