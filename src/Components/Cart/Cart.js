import { store } from "../../Store/store";
import { connect } from "react-redux";
import CartItem from "../Cart-Item/Cart-Item";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const navigate = useNavigate();
  const CartArr = store.getState().cart.CartArr;
  const totalPrice = CartArr.reduce((total, item) => {
    if (item && item.Price) {
      return total + parseFloat(item.Price);
    }
    return total;
  }, 0).toFixed(2);

  const handleProceedToCheckout = () => {
    toast.success("Checkout done Successfully!", {
      position: toast.POSITION.CENTER,
      autoClose: 3000,
    });
  };

  if (CartArr.length === 0) {
    return (
      <>
        <div
          className=" d-flex justify-content-center"
          style={{ marginTop: "150px", marginBottom: "358px" }}
        >
          <h3 className="alert alert-danger text-center  w-75 ">
            No Items in your Cart
          </h3>
        </div>
      </>
    );
  }

  if (CartArr.length > 0) {
    return (
      <div className="container bg-body" style={{ marginTop: "100px" }}>
        <div class="bg0 p-t-75 p-b-85">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                <div class="m-l-25 m-r--38 m-lr-0-xl">
                  <div class="wrap-table-shopping-cart">
                    <table class="table-shopping-cart">
                      <tr class="table_head">
                        <th class="column-1">Product</th>
                        <th class="column-2"></th>
                        <th class="column-3">Price</th>
                        <th class="column-4 text-center">Action</th>
                      </tr>
                      {CartArr.map((item) => (
                        <CartItem
                          key={item.Id}
                          Id={item.Id}
                          Title={item.Title}
                          Price={item.Price}
                          Img={item.Img}
                        />
                      ))}
                    </table>
                  </div>

                  <div class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm d-flex justify-content-center">
                    <button
                      class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                <div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                  <h4 class="mtext-109 cl2 p-b-30">Cart Totals</h4>

                  <div class="flex-w flex-t bor12 p-t-15 p-b-30">
                    <div class="size-208 w-full-ssm">
                      <span class="stext-110 cl2">Shipping:</span>
                    </div>

                    <div cclass="size-209 p-t-1">
                      <p class="mtext-110 cl2">Free</p>
                    </div>
                  </div>

                  <div class="flex-w flex-t p-t-27 p-b-33">
                    <div class="size-208">
                      <span class="mtext-101 cl2">Total:</span>
                    </div>

                    <div class="size-209 p-t-1">
                      <span class="mtext-110 cl2">${totalPrice}</span>
                    </div>
                  </div>

                  <button
                    class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                    onClick={handleProceedToCheckout}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          closeButton={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        >
          <div className="toast-toastify">
            <span className="mx-2 text-success">
              <FontAwesomeIcon icon={faRightLeft} />
            </span>
            Done Successfully!
          </div>
        </ToastContainer>
      </div>
    );
  }
};

const listingToStateChanges = (state) => {
  return {
    CartArr: state.cart.CartArr,
  };
};

export default connect(listingToStateChanges)(Cart);
