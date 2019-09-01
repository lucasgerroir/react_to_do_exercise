const initState = {
    list: []
};

export default function todos(state = initState, action) {
  switch (action.type) {
    case "ADD_TODO":
      // TODO
      return { 
        ...state,
        list: [...state.list, action.payload.text]
      }
    case "LIST_TODOS":
      // we should not manipulate the state directly
      //state.list = action.payload;
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
