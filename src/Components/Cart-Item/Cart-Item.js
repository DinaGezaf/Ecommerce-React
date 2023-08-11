/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect, useDispatch } from "react-redux";
import { store } from "../../Store/store";
import { DELETE_FROM_CART } from "../../Store/Reducers/Cart-Reducer";

const CartItem = (props) => {
  const { Id, Img, Title, Price } = props;

  const dispatch = useDispatch();
  const handleDeleteFromCart = () => {
    store.dispatch({
      type: DELETE_FROM_CART,
      payload: Id,
    });
  };

  return (
    <tr class="table_row" key={Id}>
      <td class="column-1">
        <button class="how-itemcart1" onClick={handleDeleteFromCart}>
          <img src={Img} alt="IMG" />
        </button>
      </td>
      <td class="column-2">{Title}</td>
      <td class="column-3">$ {Price}</td>
      <td class="column-4 text-center">
        <button
          className="btn mx-2 px-5 py-2"
          style={{ color: "#717fe0" }}
          onClick={handleDeleteFromCart}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

const listingToStateChanges = (state) => {
  return {
    CartArr: state.cart.CartArr
  };
};

export default connect(listingToStateChanges)(CartItem);
