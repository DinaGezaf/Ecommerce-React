import { connect } from "react-redux";
import ProductList from "../Product-List/Product-List";
import Banner from "../Core/Banner";
import Slider from "../Core/Slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Banner />
      <ProductList />
    </>
  );
};

const listingToStateChanges = (state) => {
  return {
    showProductDetailsFlag: state.product.showProductDetailsFlag,
  };
};

export default connect(listingToStateChanges)(HomePage);
