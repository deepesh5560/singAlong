const initialState: any = [];

const addplaylist = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "addplaylist":
      state = [...state, action.payload];

      let id = state.length;

      state[id - 1] = { id: id, title: state[id - 1] };

      // for (let i = 0; i < state.length; i++) {
      //   const id = i + 1;

      //   state[i] = { id: id, title: state[i] };
      // }

      return state;

    default:
      return state;
  }
};

export default addplaylist;
