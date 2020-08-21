import { RECEIVE_STOCK_NEWS } from '../../actions/news_actions';
import { RELOAD_ALL } from '../../actions/ui_actions';

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STOCK_NEWS:
      return action.news.slice(0,12);
    case RELOAD_ALL:
      return null;
    default:
      return state;
  }
};