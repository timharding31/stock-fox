import React from 'react';
import NewsStory from './news_story';

class StockNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hidden: true, button: 'Show More' }
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    e.preventDefault();
    this.setState({
      hidden: !this.state.hidden,
      button: this.state.hidden ? 'Show Less' : 'Show More'
    });
  }
  
  render() {
    const newsStories = this.props.news.map((story, idx) => (<li className={`news-story${this.state.hidden && idx > 3 ? ' hidden' : ''}`}><NewsStory key={story.id} {...story} idx={idx} /></li>));
    return (
      <div className="news-feed-container">
        <ul className="news-feed">{newsStories}</ul>
        <button className="news-feed-control" onClick={this.handleButton}>{this.state.button}</button>
      </div>)
  };
}
export default StockNews;