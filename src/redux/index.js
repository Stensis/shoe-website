// to add item to cart

export const addCart = (product) => {
    return{
        type : "ADD_ITEM",
        payload : product
    }
}

// to delete item from cart

export const DeleteCart = (product) => {
    return{
        type : "DELETE_ITEM",
        payload : product
    }
}