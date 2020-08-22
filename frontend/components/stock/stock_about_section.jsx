import React from 'react';
import numeral from 'numeral';
import Loading from '../loading';
import { sleep } from '../../util/data_handling_util';

class StockAboutSection extends React.Component {

  componentDidMount() {
    this.props.fetchStockDetail(this.props.stock);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.stock.symbol !== prevProps.stock.symbol) {
  //     this.props.fetchStockDetail(this.props.stock);
  //   }
  //   if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
  //     this.props.reload('stockDetail');
  //     this.props.fetchStockDetail(this.props.stock);
  //   }
  // }

  render() {
    if (this.props.loading || !this.props.stock.ceo) {
      return (<Loading loading={this.props.loading} compName={"stock-detail"} />);
    }
    const { stock } = this.props;
    return (
      <div className="company-profile">
        <div className="profile-header"><h3>About</h3></div>
        <p className="company-description">{stock.description}</p>
        <div className="profile-row-one">
          <div className="single-profile-module">
            <strong>CEO</strong>
            <p>{stock.ceo}</p>
          </div>
          <div className="single-profile-module">
            <strong>Employees</strong>
            <p>{numeral(stock.fullTimeEmployees).format('0,0')}</p>
          </div>
          <div className="single-profile-module">
            <strong>Headquarters</strong>
            <p>{`${stock.city}, ${stock.state}`}</p>
          </div>
          <div className="single-profile-module">
            <strong>Industry</strong>
            <p>{stock.industry}</p>
          </div>
        </div>
        <div className="profile-row-two">
          <div className="single-profile-module">
            <strong>Market Cap</strong>
            <p>{numeral(stock.mktCap).format('0.00a').toUpperCase()}</p>
          </div>
          <div className="single-profile-module">
            <strong>Discounted Cash Flow</strong>
            <p>{stock.dcf}</p>
          </div>
          <div className="single-profile-module">
            <strong>52-Week Range</strong>
            <p>{stock.range}</p>
          </div>
          <div className="single-profile-module">
            <strong>Average Volume</strong>
            <p>{numeral(stock.volAvg).format('0.0a').toUpperCase()}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default StockAboutSection;