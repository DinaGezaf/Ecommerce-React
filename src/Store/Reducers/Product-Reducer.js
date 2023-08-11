const DUMMY_PRODUCTS = [
  {
    Id: 1,
    Img: "./Images/Products/1.jpg",
    Title: "Modern Table Lamp",
    Description:
      "Sleek and stylish table lamp with adjustable brightness settings.",
    Price: 49.99,
  },
  {
    Id: 2,
    Img: "./Images/Products/2.jpeg",
    Title: "Vintage Wall Clock",
    Description: "Antique-inspired wall clock with Roman numerals.",
    Price: 79.99,
  },
  {
    Id: 3,
    Img: "./Images/Products/3.jpg",
    Title: "Cozy Throw Blanket",
    Description: "Soft and warm throw blanket for chilly evenings.",
    Price: 34.99,
  },
  {
    Id: 4,
    Img: "./Images/Products/4.jpg",
    Title: "Decorative Cushion Set",
    Description: "Set of two decorative cushions with intricate patterns.",
    Price: 29.99,
  },
  {
    Id: 5,
    Img: "./Images/Products/5.jpg",
    Title: "Rustic Wooden Shelf",
    Description: "Handcrafted wooden shelf with a rustic finish.",
    Price: 89.99,
  },
  {
    Id: 6,
    Img: "./Images/Products/6.jpg",
    Title: "Vintage Floor Mirror",
    Description: "Full-length floor mirror with an ornate vintage frame.",
    Price: 179.99,
  },
  {
    Id: 7,
    Img: "./Images/Products/7.jpg",
    Title: "Contemporary Area Rug",
    Description: "Modern area rug with abstract patterns and vibrant colors.",
    Price: 129.99,
  },
  {
    Id: 8,
    Img: "./Images/Products/8.jpg",
    Title: "Elegant Curtain Panels",
    Description: "Set of two sheer curtain panels with delicate embroIdery.",
    Price: 54.99,
  },
  {
    Id: 9,
    Img: "./Images/Products/9.jpg",
    Title: "Artificial Potted Plant",
    Description:
      "Realistic artificial potted plant for adding greenery to any space.",
    Price: 19.99,
  },
  {
    Id: 10,
    Img: "./Images/Products/10.jpeg",
    Title: "Velvet Upholstered Chair",
    Description: "Plush velvet chair with a comfortable and stylish design.",
    Price: 249.99,
  },
  {
    Id: 11,
    Img: "./Images/Products/11.jpg",
    Title: "Minimalist Wall Art",
    Description: "Set of three abstract art prints for minimalist decor.",
    Price: 69.99,
  },
  {
    Id: 12,
    Img: "./Images/Products/12.jpg",
    Title: "Ceramic Vase Set",
    Description: "Set of three ceramic vases in varying sizes and colors.",
    Price: 39.99,
  },
  {
    Id: 13,
    Img: "./Images/Products/13.jpg",
    Title: "Chic Desk Organizer",
    Description:
      "Stylish desk organizer with multiple compartments and a sleek design.",
    Price: 19.99,
  },
  {
    Id: 14,
    Img: "./Images/Products/14.jpg",
    Title: "Industrial Pendant Light",
    Description: "Vintage-inspired pendant light with an industrial look.",
    Price: 89.99,
  },
  {
    Id: 15,
    Img: "./Images/Products/15.webp",
    Title: "Decorative Wall Shelves",
    Description:
      "Set of three floating wall shelves for displaying small decor items.",
    Price: 49.99,
  },
];
localStorage.setItem("productArr", JSON.stringify(DUMMY_PRODUCTS));

const initialState = {
  ProductArr: JSON.parse(localStorage.getItem("productArr")) || [],
  showProductDetailsFlag: false,
  selectedProduct: { id: 0, Img: "", Title: "", Description: "", Price: 0 },
};

export const VIEW_PRODUCT_DETAILS = "VIEW_PRODUCT_DETAILS";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PRODUCT_DETAILS:
      console.log(action);
      const selectedProduct = action.payload
        ? state.ProductArr.find((product) => product.Id === action.payload)
        : null;
      return {
        ...state,
        showProductDetailsFlag: !state.showProductDetailsFlag,
        selectedProduct: selectedProduct,
      };
    case ADD_NEW_PRODUCT:
      const NewProduct = {
        Id: action.payload.Id,
        Img: action.payload.Img,
        Title: action.payload.Title,
        Description: action.payload.Description,
        Price: action.payload.Price,
      };

      // const NewProductArr = [...state.ProductArr, NewProduct];
      // localStorage.setItem("productArr", JSON.stringify(NewProductArr));

      return { ...state, ProductArr: [...state.ProductArr, NewProduct] };

    default:
      return state;
  }
};

export default ProductReducer;
