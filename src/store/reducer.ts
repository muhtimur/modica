import * as actionTypes from "./actionTypes";

const initialState: TodoState = {
  items: [
    { id: 1, text: "One", isCrossed: false },
    { id: 2, text: "Two", isCrossed: true },
  ],
};

const reducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM:
      const newItem: ITodoItem = {
        id: state.items.length,
        text: action.item.text,
        isCrossed: false,
      };
      return {
        ...state,
        items: state.items.concat(newItem),
      };
  }
  return state;
};

export default reducer;