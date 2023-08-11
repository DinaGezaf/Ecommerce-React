import { NavLink } from "react-router-dom";
import { store } from "../../Store/store";
import { connect } from "react-redux";

const Navbar = () => {
  const count = store.getState().cart.CartArr.length;

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary px-4 mb-3 border-bottom fixed-top shadow-sm bg-dark text-light ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="fs-3 text-light">
          <NavLink exact={true} to="/" className="nav-link">
            <span style={{ color: "#717fe0", fontFamily: "cursive" }}>
              ThV{" "}
            </span>
            Store
          </NavLink>
        </div>
        <div
          className="collapse navbar-collapse justify-content-md-center fs-4 menu-desktop"
          id="navbarsExample10"
        >
          <ul className="navbar-nav main-menu" style={{ marginRight: "100px" }}>
            <li className="nav-item px-2">
              <NavLink
                exact={true}
                to="/"
                activeclassname="active"
                className="nav-link text-light"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                exact={true}
                to="/products"
                activeclassname="active"
                className="nav-link text-light"
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item px-2">
              <NavLink
                exact={true}
                to="/about"
                activeclassname="active"
                className="nav-link text-light"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          class="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
          data-notify={count}
        >
          <NavLink
            exact={true}
            to="/cart"
            activeclassname="active"
            className="nav-link"
          >
            <i class="zmdi zmdi-shopping-cart"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const listingToStateChanges = (state) => {
  return {
    CartArr: state.cart.CartArr,
  };
};

export default connect(listingToStateChanges)(Navbar);
