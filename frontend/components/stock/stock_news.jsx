import React from 'react';
import moment from 'moment';
import NewsStory from './news_story';

class StockNews extends React.Component {

  componentDidMount() {
    this.props.fetchStockNews(this.props.stock);
  }

  render() {
    if (typeof(this.props.news) !== 'Array' || this.props.news.length === 0) return null;
    const newsStories = this.props.news.map(story => (
      <NewsStory key={story.id}
        date={new Date(story.datetime * 1000)}
        headline={story.headline}
        source={story.source}
        summary={story.summary}
        image={story.image} />
      ));
    return(
      <ul className="newsfeed">{newsStories}</ul>
    )
  }
}

export default StockNews;