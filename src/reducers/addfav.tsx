const initialState: any = [];

const addReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "addfav":
      state = [...state, action.payload];
      let newState = [...new Set(state)];

      return newState;
    case "removefav":
      let newStatedel: any = [];
      console.log(action.payload);

      newStatedel = state.filter((data: any) => data.id !== action.payload.id);

      return newStatedel;
    default:
      return state;
  }
};

export default addReducer;
