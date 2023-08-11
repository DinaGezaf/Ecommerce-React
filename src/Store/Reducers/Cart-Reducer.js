
const initialState = {
  Items: JSON.parse(localStorage.getItem("productArr")) || [],
  CartArr: JSON.parse(localStorage.getItem("cart")) || [],
};

export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "REMOVE_FROM_CART";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const CartItemId = action.payload;
      const productArr = JSON.parse(localStorage.getItem("productArr")) || [];
      const CartItem = productArr.find((product) => product.Id === CartItemId);
      localStorage.setItem("cart", JSON.stringify([...state.CartArr, CartItem]));
      return { ...state, CartArr: [...state.CartArr, CartItem] };

    case DELETE_FROM_CART:
      console.log(action.payload);
      let NewArr = state.CartArr.filter((item) => item.Id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(NewArr));
      return {
        ...state,
        CartArr: NewArr,
      };

    default:
      return state;
  }
};

export default cartReducer;
