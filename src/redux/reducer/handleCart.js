const cart = [];

const handleCart = (state = cart, action) => {
  const Product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // CHECK IF THE ITEM ALREADY EXISTS
      const exist = state.find((x) => x.asin === Product.asin);
      if (exist) {
        // INCREASE THE QUANTITY
        return state.map((x) =>
          x.asin === Product.asin ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...Product,
            qty: 1
          }
        ];
      }

    case "DELETE_ITEM":
      const exist1 = state.find((x) => x.asin === Product.asin);
      if (exist1.qty === 1) {
        return state.filter((x) => x.asin !== exist1.asin);
      } else {
        return state.map((x) =>
          x.asin === Product.asin ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};
export default handleCart;
