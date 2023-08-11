import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { store } from "../../Store/store";
import { VIEW_PRODUCT_DETAILS } from "../../Store/Reducers/Product-Reducer";
import { ADD_TO_CART } from "../../Store/Reducers/Cart-Reducer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ProductItem = (props) => {
  const { Id, Img, Title, Price } = props;

  const handleViewDetails = () => {
    store.dispatch({
      type: VIEW_PRODUCT_DETAILS,
      payload: Id,
    });
  };

  const handleAddToCart = () => {
    let selectedProduct = store
      .getState()
      .cart.CartArr.find((item) => item.Id === Id);
    if (selectedProduct) {
      toast.error("This product already exists in the cart");
    } else {
      store.dispatch({
        type: ADD_TO_CART,
        payload: Id,
      });
      toast.success("Product added to cart");
    }
  };

  return (
    <div
      class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women mx-2"
      style={{ width: "307px" }}
    >
      <div class="block2">
        <div class="block2-pic hov-img0">
          <img src={Img} alt="IMG-PRODUCT" height="307px" />
          <button
            class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
          </button>
        </div>

        <div class="block2-txt flex-w flex-t p-t-14">
          <div class="block2-txt-child1 flex-col-l ">
            <p class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
              {Title}
            </p>
            <span class="stext-105 cl3">${Price}</span>
          </div>

          <div class="block2-txt-child2 flex-r p-t-3">
            <button
              onClick={handleViewDetails}
              class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
            >
              <Link
                to={`/productDetails`}
                class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
              >
                <FontAwesomeIcon icon={faExpand} />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ProductItem;
