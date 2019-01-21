import {
  GET_PREVIEW_SUCCESS,
  GET_PREVIEW_FAILURE,
  STARTED_FETCHING_PREVIEW,
  FINISHED_FETCHING_PREVIEW,
} from '../constants/actionTypes/preview';

const previewAbout = (state = {
  page: {},
  startedFetching: false,
  finishedFetching: false,
  error: null,
}, action) => {
  switch (action.type) {
    case GET_PREVIEW_SUCCESS:
      return {
        ...state,
        page: {
          title: action.page.title,
          shortDescription: action.page.short_description,
          longDescription: action.page.long_description,
          heroImageUrl: action.page.hero_image_url,
          customContent: action.page.custom_content,
          id: action.page.id,
          journalId: action.page.journal_id,
          purchaseUrl: action.page.purchase_url,
          price: action.page.price,
          accessLength: action.page.accessLength,
        },
      };
    case GET_PREVIEW_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case STARTED_FETCHING_PREVIEW:
      return {
        ...state,
        error: null,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_PREVIEW:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    default:
      return state;
  }
};

export default previewAbout;
