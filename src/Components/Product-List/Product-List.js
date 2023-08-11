import { store } from "../../Store/store";
import { connect } from "react-redux";
import ProductItem from "../Product-Item/Product-Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const ProductList = () => {
  const ProductArr = store.getState().product.ProductArr;
  const navigate = useNavigate();

  if (ProductArr.length === 0) {
    return (
      <>
        <div className="row">
          <h3 className="alert alert-danger">No Products to View</h3>
        </div>
      </>
    );
  }
  if (ProductArr.length > 0) {
    return (
      <>
        <div class="container my-5" style={{ marginTop: "140px" }}>
          <div class="p-b-10" style={{ marginTop: "140px" }}>
            <h3 class="ltext-103 cl5">Product Overview</h3>
            <div class="d-flex align-items-end flex-column">
              <div class="d-flex align-items-end flex-column mb-3 size-204 flex-w flex-m respon6-next">
                <button
                  class=" px-5 flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail mx-4"
                  onClick={() => {
                    navigate("/addNewProduct");
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} className=" px-1" />
                  <span class="px-2"> Product</span>
                </button>
              </div>
            </div>
          </div>
          <div className="my-4 row isotope-grid">
            {ProductArr.map((item) => (
              <ProductItem
                key={item.Id}
                Id={item.Id}
                Img={item.Img}
                Title={item.Title}
                Description={item.Description}
                Price={item.Price}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
};

const listingToStateChanges = (state) => {
  return {
    ProductArr: state.product.ProductArr,
  };
};

export default connect(listingToStateChanges)(ProductList);
