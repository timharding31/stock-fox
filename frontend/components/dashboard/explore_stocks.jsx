import React from 'react';
import Loading from '../loading';
import SectorView from './sector_view';

class ExploreStocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sector: null };
    this.baseState = { ...this.state };
    this.updateSelection = this.updateSelection.bind(this);
  }
  componentDidMount() {
    let allSectors = ["Technology", "Health Care", "Finance", "Energy", "Consumer Services", "Capital Goods", "Transportation", "Consumer Durables", "Consumer Non-Durables"]
    for (let sector of allSectors) {
      this.props.fetchStocksBySector(sector);
    }
  }

  updateSelection(e) {
    e.preventDefault();
    this.setState({ sector: e.currentTarget.value });
    const btnList = Array.from(document.getElementsByClassName('sector-link'));
    btnList.forEach(btn => {
      if (Array.from(btn.classList).includes('selected')) btn.classList.remove('selected');
    });
    e.currentTarget.classList.add('selected');
  }

  render() {
    // if (this.state.sector && this.props.sectorData) {
    //   if (!this.props.sectorData.allSectors.includes(this.state.sector)) {
    //     this.props.fetchStocksBySector(this.state.sector);
    //   }
    //   // let sector = Array.from(document.getElementsByClassName('sector-link selected'))[0].value
    // }
    return (
      <div className="explore-stocks">
        <h2>Explore Stocks by Popular Categories</h2>
        <ul>
          <li className="sector-link">
            <button className="sector-link" onClick={this.updateSelection} value="Technology">Technology</button>
          </li>
          <li className="sector-link">
            <button className="sector-link" onClick={this.updateSelection} value="Health Care">Healthcare</button>
          </li>
          <li className="sector-link">
            <button className="sector-link" onClick={this.updateSelection} value="Finance">Finance</button>
          </li>
          <li className="sector-link">
            <button className="sector-link" onClick={this.updateSelection} value="Energy">Energy</button>
          </li>
          <li className="sector-link">
            <button className="sector-link" onClick={this.updateSelection} value="Consumer Services">Consumer Services</button>
          </li>
          <li className="sector-link">
            <button className="sector-link" onClick={this.updateSelection} value="Capital Goods">Capital Goods</button>
          </li>
          <li className="sector-link">
            <button className="sector-link" onClick={this.updateSelection} value="Transportation">Transportation</button>
          </li>
          <li className="sector-link">
            <button className="sector-link" onClick={this.updateSelection} value="Consumer Durables">Consumer Durables</button>
          </li>
          <li className="sector-link">
            <button className="sector-link" onClick={this.updateSelection} value="Consumer Non-Durables">Consumer Non-Durables</button>
          </li>
        </ul>
        <SectorView
          {...this.props}
          selection={this.state.sector}
        />
      </div>
    )
  }
}

export default ExploreStocks;
