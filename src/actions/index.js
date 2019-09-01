
export function loadTodos() {
  return dispatch => {
    // for the sake of this exercise data is being returned directly - real implementation would use API
    // timeout added for realism of latency
    setTimeout(() => {
      dispatch({
        type: "LIST_TODOS",
        payload: ["todo one", "todo two"]
      });
    }, 2000);
  };
}

export function addTodo(payload) {
   return dispatch => {
    // imagine that adding a todo is also an async operation
    setTimeout(() => {
        console.log("add");
        dispatch({
          type: "ADD_TODO",
          payload: payload
        });
      // TODO
    }, 2000);
  };
}