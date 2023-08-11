import React from "react";
import { store } from "../../Store/store";
import { connect } from "react-redux";
import { VIEW_PRODUCT_DETAILS } from "../../Store/Reducers/Product-Reducer";
import { useNavigate } from "react-router-dom";
import { ADD_TO_CART } from "../../Store/Reducers/Cart-Reducer";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const navigate = useNavigate();

  let selectedProduct = store.getState().product.selectedProduct;

  const handleAddToCart = () => {
    let Product = store
      .getState()
      .cart.CartArr.find((item) => item.Id === selectedProduct.Id);
    if (Product) {
      toast.error("This product already exists in the cart");
    } else {
      store.dispatch({
        type: ADD_TO_CART,
        payload: selectedProduct.Id,
      });
      toast.success("Product added to cart");
    }
  };

  return (
    <div className="container" style={{ marginTop: "140px" }}>
      <div class="container">
        <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
          <div class="row">
            <div class="col-md-6 col-lg-7 p-b-30">
              <div class="p-l-25 p-r-30 p-lr-0-lg">
                <div class="wrap-slick3 flex-sb flex-w">
                  <div class="slick3 gallery-lb">
                    <div
                      class="item-slick3"
                      data-thumb="images/product-detail-01.jpg"
                    >
                      <div class="wrap-pic-w pos-relative shadow-lg p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img
                          class="rounded"
                          src={selectedProduct.Img}
                          alt="IMG-PRODUCT"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-5 p-b-30 p-5 text-center card border-0">
              <div class="my-5 py-2">
                <div class="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                    {selectedProduct.Title}
                  </h4>

                  <span class="mtext-106 cl2">${selectedProduct.Price}</span>

                  <p class="stext-102 cl3 p-t-23">
                    {selectedProduct.Description}
                  </p>

                  <div class="py-5">
                    <div class="d-flex justify-content-center">
                      <div class="size-204 flex-w flex-m respon6-next">
                        <button
                          class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail mx-2"
                          onClick={handleAddToCart}
                        >
                          Add to cart
                        </button>
                      </div>
                      <div class="size-204 flex-w flex-m respon6-next">
                        <button
                          class="px-5 flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail mx-4"
                          onClick={() => {
                            store.dispatch({ type: VIEW_PRODUCT_DETAILS });
                            navigate("/");
                          }}
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};
const listingToStateChanges = (state) => {
  return {
    showProductDetailsFlag: state.product.showProductDetailsFlag,
  };
};

export default connect(listingToStateChanges)(ProductDetails);
