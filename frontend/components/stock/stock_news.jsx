import React from 'react';
import NewsStory from './news_story';
import Loading from '../loading';

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
    if (this.props.loading) {
      return (<Loading loading={this.props.loading} compName={"stock-news"} />);
    }
    const newsStories = this.props.news.map((story, idx) => (<li key={`li-${idx}`} className={`news-story${this.state.hidden && idx > 3 ? ' hidden' : ''}`}><NewsStory {...story} idx={idx} /></li>));
    return (
      <div className="news-feed-container">
        <div className="news-feed-header"><h3>Company News</h3></div>
        <ul className="news-feed">{newsStories}</ul>
        <button className="news-feed-control" onClick={this.handleButton}>{this.state.button}</button>
      </div>)
  };
}
export default StockNews;