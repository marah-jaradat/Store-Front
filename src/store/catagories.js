const initialState = {
  catagories: [
    {
      name: "food",
      id: 1,
      desc: "fresh types of new foods you can find thm only here",
    },
    {
      name: "clothes",
      id: 2,
      desc: "latest brands with best styles",
    },
    {
      name: "electronics",
      id: 3,
      desc: "new versions and ltest technologies",
    },
  ],
};

export default function catagories(state = initialState, action) {
  switch (action.type) {
    case "GET_CATAGORIES":
      return state;
    case "GET_ACTIVE_CATAGORY":
      let activeCatagory = state.catagories.find(
        (catagory) => action.payload === catagory.id
      );
      return { ...state, activeCatagory };
    default:
      return state;
  }
}

export const getCatagories = () => {
  return {
    type: "GET_CATAGORIES",
  };
};

export const getActiveCatagory = (id) => {
  return {
    type: "GET_ACTIVE_CATAGORY",
    payload: id,
  };
};
