import React from 'react';
import NewsStory from './news_story';
import Loading from '../loading';

class StockNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      button: 'Show More',
      loading: true
    }
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    if (!this.props.news[this.props.params.symbol]) this.props.fetchStockNews(this.props.stock);
  }

  componentDidUpdate(prevProps) {
    if (this.state.loading) {
      if (Boolean(this.props.news[this.props.params.symbol])) {
        this.setState({ loading: false });
      }
    }
    if (this.props.params.symbol !== prevProps.params.symbol) {
      if (!this.props.news[this.props.params.symbol]) this.props.fetchStockNews(this.props.stock);
    }
  }

  shouldComponentUpdate() {
    return Boolean(this.props.news)
  }

  handleButton(e) {
    e.preventDefault();
    this.setState({
      hidden: !this.state.hidden,
      button: this.state.hidden ? 'Show Less' : 'Show More'
    });
  }
  
  render() {
    if (this.props.loading || !this.props.news) {
      return (<Loading loading={this.props.loading || !this.props.news[this.props.params.symbol]} compName={"stock-news"} />);
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