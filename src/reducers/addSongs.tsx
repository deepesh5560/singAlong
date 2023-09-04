const initialState: any = [];

const addSongs = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "addSongs":
      if (state[0]) {
        let newState = state.filter(
          (data: any) =>
            data.playlistId === action.payload.playlistId &&
            data.song.id === action.payload.song.id
        );
        if (newState[0]) {
          return (state = [...state]);
        } else {
          return (state = [...state, action.payload]);
        }
      } else {
        return (state = [...state, action.payload]);
      }

    case "clear":
      return (state = []);

    default:
      return state;
  }
};

export default addSongs;
