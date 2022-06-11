const initialState = {
  products: [
    {
      name: "Strawberries",
      id: 1,
      price: 10,
      inventory: 10,
      desc: "best Strawberries in jordan",
      img: "https://th.bing.com/th/id/R.fddb99e74b3b34b7c6ef167615fe28e4?rik=oCwqS3nQAEq1XQ&pid=ImgRaw&r=0",
      catagoryId: 1,
    },
    {
      name: "Ice Cream",
      id: 6,
      price: 10,
      inventory: 10,
      desc: "best Ice Cream in jordan",
      img: "https://th.bing.com/th/id/OIP.jaaUBF5St1gK6K0ES3eqCgHaLH?pid=ImgDet&rs=1",
      catagoryId: 1,
    },
    {
      name: "Windows",
      id: 3,
      price: 1200,
      inventory: 10,
      desc: "best Laptop",
      img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      catagoryId: 3,
    },
    {
      name: "Mac",
      id: 4,
      price: 1700,
      inventory: 10,
      desc: "overpriced Laptop",
      img: "https://th.bing.com/th/id/OIP.vYy4KFqzhZ8oGpchSU0o8QHaGM?pid=ImgDet&rs=1",
      catagoryId: 3,
    },
    {
      name: "Dresses",
      id: 2,
      price: 300,
      inventory: 10,
      desc: "beautiful dress",
      img: "https://th.bing.com/th/id/R.7c3e28b6158764b9eda482e6ed45b0cb?rik=MeGNULnXydMuJQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-3i1mBz2ETLQ%2fU7_WQ7vjZvI%2fAAAAAAAAHv4%2fdd-fnMt5TwY%2fs1600%2fgown.jpg&ehk=x%2fVjHuVKnL4%2fYQ2fmF1bm49CPrCOGPoI0GJnA6auusQ%3d&risl=&pid=ImgRaw&r=0",
      catagoryId: 2,
    },
    {
      name: "Tshirt",
      id: 5,
      price: 30,
      inventory: 10,
      desc: "best T-shirt in jordan",
      img: "https://th.bing.com/th/id/R.fa16ee65d858944948a299e002d0ad40?rik=ySwAtAbVqb0YNg&pid=ImgRaw&r=0",
      catagoryId: 2,
    },
  ],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return state;
    case "INCREMENT_PRODUCTS":
      let newProducts = state.products.map((prod) => {
        if (prod.id === action.payload) {
          prod.inventory++;
        }
        return prod;
      });
      return { ...state, products: newProducts };
    case "DECREMENT_PRODUCTS":
      let newProductz = state.products.map((prod) => {
        if (prod.id === action.payload) {
          prod.inventory--;
        }
        return prod;
      });
      return { ...state, products: newProductz };
    default:
      return state;
  }
}

export const getProducts = () => {
  return {
    type: "GET_PRODUCTS",
  };
};

export const increment = (id) => {
  return {
    type: "INCREMENT_PRODUCTS",
    payload: id,
  };
};

export const decrement = (id) => {
  return {
    type: "DECREMENT_PRODUCTS",
    payload: id,
  };
};
