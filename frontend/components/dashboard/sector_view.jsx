import React from 'react';
import Loading from '../loading';
import { compareListItems, formatPrice } from '../../util/data_handling_util';

class SectorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortBy: 'price' };

    this.changeSort = this.changeSort.bind(this);
  }

  changeSort(e) {
    e.preventDefault();
    this.setState({ sortBy: e.currentTarget.value });
    let btns = Array.from(document.getElementsByClassName('sort-button'));
    btns.forEach(btn => btn.classList.remove('sorted'));
    e.currentTarget.classList.add("sorted");
  }

  linkOut(link) {
    window.location = `${window.location.href}${link}`;
  }

  render() {
    if (!this.props.sectorData || !this.props.sectorData.bySector || !this.props.selection) return null;
    if (!this.props.sectorData.allSectors.includes(this.props.selection)) {
      return (<Loading loading={!this.props.sectorData.allSectors.includes(this.props.selection)} compName={"sector-data"} />)
    } else {
      let stockList = this.props.sectorData.bySector[this.props.selection].sort(compareListItems(this.state.sortBy));
      return (
        <div className="sector-view">
          <table className="sector-view-stock-table">
            <thead>
              <tr className="header-row">
                <th><button className="sort-button" value="symbol" onClick={this.changeSort}>Symbol</button></th>
                <th><button className="sort-button" value="name" onClick={this.changeSort}>Company Name</button></th>
                <th><button className="sort-button sorted" value="price" onClick={this.changeSort}>Price</button></th>
              </tr>
            </thead>
            <tbody>
              {stockList.map(stock => (
                <tr className="body-row" key={stock.symbol} onClick={() => this.linkOut(`stocks/${stock.symbol}`)}>
                  <td>{stock.symbol}</td>
                  <td>{stock.name}</td>
                  <td>{formatPrice(stock.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default SectorView;