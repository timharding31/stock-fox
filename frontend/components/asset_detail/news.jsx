import React from 'react';

class StockNews extends React.Component {

  componentDidMount() {
    this.props.getStockNews(this.props.stock);
  }
}

export default StockNews;