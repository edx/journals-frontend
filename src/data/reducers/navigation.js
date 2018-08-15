import { TOGGLE_NAVIGATION_VISABILITY, TOGGLE_NAVIGATION_OPEN } from '../constants/actionTypes/navigation';

const navigation = (state = {
  open: false,
}, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case TOGGLE_NAVIGATION_VISABILITY:
      return {
        ...state,
        visible: action.visible,
      };
    default:
      return state;
  }
};

export default navigation;
