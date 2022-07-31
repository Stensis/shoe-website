const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
        //CHECK IF THE ITEM ALREADY EXISTS
        const exist = state.find((x)=> x.asin === product.asin);
        if(exist){
            // increase the quantity
            return state.map((x) =>
            x.asin === product.asin ? {...x, qty : x.qty + 1} : x
            );
        }else{
            const product = action.payload;
            return[
                ...state,
                {
                    ...product,
                    qty: 1,
                }
            ]
        }
        break;

        case "DELETE_ITEM":
            const exist1 = state.find((x)=>x.asin ===product.asin);
            if(exist1.qty === 1){
                return state.filter((x)=>x.asin !== exist1.asin);
            }else{
                return state.map((x)=>
                x.asin ===  product.asin ? {...x, qty: x.qty-1} : x
                );
            }
            break;

    default:
        return state
      break;
  }
};
export default handleCart;
