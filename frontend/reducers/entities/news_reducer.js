import { RECEIVE_STOCK_NEWS } from '../../actions/news_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STOCK_NEWS:
      return action.news;
    // case RECEIVE_COLLECTION_NEWS:
      
    default:
      return state;
  }
};