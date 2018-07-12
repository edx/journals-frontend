import TOGGLE_NAVIGATION_PANEL from '../constants/actionTypes/navigation';

const navigation = (state = {
  open: false,
}, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION_PANEL:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default navigation;
