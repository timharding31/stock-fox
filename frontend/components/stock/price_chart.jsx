import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import PriceChartTooltip from './price_chart_tooltip';

class PriceChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: (this.props.stock.price / 100) };
    this.baseState = { ...this.state };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.range) {
      if (this.props.range !== prevProps.range) {
        this.props.fetchStockPrices[this.props.range](this.props.stock);
      }
    }
    if (this.props.stock != prevProps.stock) {
      this.setState({ price: (this.props.stock.price / 100) });
    }
  }

  handleMouseMove({ isTooltipActive, activePayload }) {
    if (isTooltipActive) {
      this.setState({ price: activePayload[0].payload.price.toFixed(2) });
    }
  }

  handleMouseLeave() {
    this.setState(this.baseState);
  }

  render() {
    if (!this.props.prices[this.props.range]) return null;
    const priceData = this.props.prices[this.props.range];
    const yDomain = [
      Math.min.apply(Math, priceData.map(obj => obj.price)),
      Math.max.apply(Math, priceData.map(obj => obj.price))
    ]
    const xDomain = [
      Math.min.apply(Math, priceData.map(obj => obj.date)),
      Math.max.apply(Math, priceData.map(obj => obj.date))
    ]
    let offset = -60;
    if (this.props.range === '1Y' || this.props.range === '5Y') {
      offset += 10;
    } else if (this.props.range === '1D') {
      offset += 30;
    }
    return (
      <div id="price-chart-container">
        <div className="price-chart-header">
          <h3>{this.props.stock.name}</h3>
          <h3>{this.state.price}</h3>
        </div>
        <div className="price-chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
              data={priceData}
              margin={{ top: 5, bottom: 5, left: 0 }}
            >
              <CartesianGrid vertical={false} horizontal={false} />
              <XAxis dataKey="date" domain={xDomain} axisLine={false}/>
              <YAxis dataKey="price" domain={yDomain} axisLine={false} tick={false}/>
              <Tooltip
                content={<PriceChartTooltip range={this.props.range} />}
                position={{ y: -30 }}
                offset={offset}
                cursor={true} />
              <Line type="monotone" dataKey="price" strokeWidth="3" stroke="#5bc43b" dot={false} isAnimationActive={true} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      )
    }

}



export default PriceChart;