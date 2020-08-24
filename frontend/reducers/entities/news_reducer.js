import { RECEIVE_STOCK_NEWS } from '../../actions/news_actions';
import { RELOAD_ALL } from '../../actions/ui_actions';
import { newsSelector } from '../../selectors/news_selector';

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STOCK_NEWS:
      return newsSelector(action.news);
    case RELOAD_ALL:
      return null;
    default:
      return state;
  }
};