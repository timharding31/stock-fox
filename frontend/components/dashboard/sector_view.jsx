import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading';
import { compareListItems, formatPrice } from '../../util/data_handling_util';

class SectorView extends React.Component {
  render() {
    if (!this.props.sectorData || !this.props.sectorData.bySector || !this.props.selection) return null;
    if (!this.props.sectorData.allSectors.includes(this.props.selection)) {
      return (<Loading loading={!this.props.sectorData.allSectors.includes(this.props.selection)} compName={"sector-data"} />)
    } else {
      let stocks = this.props.sectorData.bySector[this.props.selection];
      let stockList = [];
      let idx = 1;
      // let stockData = this.props.stockData.allSymbols.sort(symbol => -this.props.stockData.bySymbol[symbol].price);
      for (let symbol in stocks) {
        stockList.push(
          <li className="sector-stock">
            <Link to={`/stocks/${symbol}`}>
              <p>{symbol}</p>
              <p>{stocks[symbol].name}</p>
              <p id="price">{formatPrice(stocks[symbol].price)}</p>
            </Link>
          </li>
        )
      }
      stockList = stockList.sort(compareListItems);
      return (
        <div className="sector-view">
          <div className="sector-view-header">
            <p>Symbol</p>
            <p>Company Name</p>
            <p>Price</p>
          </div>
          <ol className="sector-view-stock-list">
            {stockList}
          </ol>
        </div>
      )
    }
  }
}

// export default ({ sector, sectorData }) => {
//   if (!sector || !this.props.allSectors) {
//     return null;
//   // } else if (Boolean(!this.props.sector.allSectors)) {
//   //   return (<Loading loading={loading} compName={"sector-data"} />)
//   } else {
//     let stocks = sectorData.allSectors[this.state.sector]
//     let stockList = [];
//     for (let symbol in stocks) {
//       stockList.push(
//         <li className="sector-stock">
//           <Link to={`/stocks/${symbol}`}>
//             <p>{symbol}</p>
//             <p>{stocks[symbol].name}</p>
//             <p>{stocks[symbol].price}</p>
//           </Link>
//         </li>
//       )
//     }
//     return (
//       <div className="sector-view">
//         <ul className="sector-view-stock-list">
//           {stockList}
//         </ul>
//       </div>
//     )
//   }
// }

export default SectorView;