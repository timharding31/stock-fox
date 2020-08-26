import { RECEIVE_STOCK_NEWS } from '../../actions/news_actions';
import { RELOAD_ALL } from '../../actions/ui_actions';
import { newsSelector } from '../../selectors/news_selector';

export default (state = { byTopic: {}, allTopics: [] }, {type, news, topic}) => {
  Object.freeze(state);
  let nextState = { ...state };

  switch (type) {
    case RECEIVE_STOCK_NEWS:
      nextState.byTopic[topic] = newsSelector(news);
      if (!nextState.allTopics.includes(topic)) nextState.allTopics.push(topic);
      return nextState;
    case RELOAD_ALL:
      return null;
    default:
      return state;
  }
};