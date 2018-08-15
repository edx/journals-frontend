import { TOGGLE_NAVIGATION_VISABILITY, TOGGLE_NAVIGATION_OPEN } from '../constants/actionTypes/navigation';

const toggleNavigationVisibility = visible => (
  {
    type: TOGGLE_NAVIGATION_VISABILITY,
    visible,
  }
);
const toggleNavigationOpen = () => (
  {
    type: TOGGLE_NAVIGATION_OPEN,
  }
);

export {
  toggleNavigationVisibility,
  toggleNavigationOpen,
};
