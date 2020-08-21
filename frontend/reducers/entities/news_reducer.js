import { RECEIVE_STOCK_NEWS } from '../../actions/news_actions';

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STOCK_NEWS:
      return action.news.slice(0,12);
    default:
      return state;
  }
};