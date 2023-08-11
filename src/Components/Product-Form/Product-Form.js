import { useState } from "react";
import { store } from "../../Store/store";
import { ADD_NEW_PRODUCT } from "../../Store/Reducers/Product-Reducer";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

const INITIAL_PRODUCT = {
  Id: 0,
  Img: "",
  Title: "",
  Description: "",
  Price: 0,
};

const ProductForm = () => {
  const navigate = useNavigate();

  const [NewProduct, setNewProduct] = useState(INITIAL_PRODUCT);

  const changeInputHandler = (event) => {
    const { id, value } = event.target;
    setNewProduct({ ...NewProduct, [id]: value });
  };

  const resetFormHandler = () => {
    setNewProduct(INITIAL_PRODUCT);
  };

  const OnSubmit = () => {
    if (
      NewProduct.Img.length === 0 ||
      NewProduct.Title.length === 0 ||
      NewProduct.Description.length === 0 ||
      NewProduct.Price === 0
    )
      return;

    NewProduct.Id = store.getState().product.ProductArr.length + 1;

    const fileName = NewProduct.Img.split("\\").pop();
    const imgUrl = "./Images/Products/" + fileName;
    NewProduct.Img = imgUrl;

    NewProduct.Price = parseFloat(NewProduct.Price);
    store.dispatch({
      type: ADD_NEW_PRODUCT,
      payload: NewProduct,
    });

    console.log(NewProduct);

    const updatedProductArr = store.getState().product.ProductArr;
    localStorage.setItem("productArr", JSON.stringify(updatedProductArr));
    navigate("/products")
  };

  return (
    <div
      class="container shadow-lg p-5 bg-body-tertiary rounded w-50 d-flex justify-content-center"
      style={{ marginTop: "150px", marginBottom: "100px" }}
    >
      <div class="w-75">
        <div class="mb-3">
          <label htmlFor="Title" class="form-label">
            Title
          </label>
          <input
            value={NewProduct.Title}
            onChange={changeInputHandler}
            type="text"
            className="form-control"
            id="Title"
            placeholder="Enter Product Title.."
          />
        </div>
        <div class="mb-3">
          <label htmlFor="Description" class="form-label">
            Description
          </label>
          <textarea
            value={NewProduct.Description}
            onChange={changeInputHandler}
            class="form-control"
            id="Description"
            placeholder="Enter Product Description.."
          ></textarea>
        </div>
        <div class="mb-3">
          <label htmlFor="Img" class="form-label">
            Image
          </label>
          <input
            onChange={changeInputHandler}
            type="file"
            class="form-control"
            id="Img"
          />
          {/* <span>{NewProduct.Img}</span> */}
        </div>
        <div class="mb-3">
          <label htmlFor="Price" class="form-label">
            Price
          </label>
          <input
            value={NewProduct.Price}
            onChange={changeInputHandler}
            type="number"
            class="form-control"
            id="Price"
            placeholder="Enter Product Price.."
          />
        </div>
        <div class="text-center m-4 d-flex justify-content-center">
          <button type="submit" class="btn btn-dark px-3" onClick={OnSubmit}>
            Add
          </button>
          <button
            type="reset"
            class="btn btn-warning mx-2 px-3"
            onClick={resetFormHandler}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const listingToStateChanges = (state) => {
  return {
    ProductArr: state.product.ProductArr,
  };
};

export default connect(listingToStateChanges)(ProductForm);
