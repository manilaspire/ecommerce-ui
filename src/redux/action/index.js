// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}

// For Add token
export const saveToken = (token) =>{
    return {
        type:"SAVETOKEN",
        payload:token
    }
}

// For Add token
export const removeToken = (token) =>{
    return {
        type:"REMOVETOKEN",
        payload:token
    }
}