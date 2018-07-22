import { INPUT_VALUE_CHANGED } from "./actionTypes";

export function valueChanged(dispatch, id, value) {
  dispatch({ type: INPUT_VALUE_CHANGED, payload: { id, value } });
}
