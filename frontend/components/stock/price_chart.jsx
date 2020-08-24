import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import numeral from 'numeral';
import PriceChartTooltip from './price_chart_tooltip';
import Loading from '../loading';
import { formatPrice } from '../../util/data_handling_util';

class PriceChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: formatPrice(props.stock.price) };
    this.baseState = { ...this.state };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    this.setState({ price: formatPrice(this.props.stock.price) });
  }

  componentDidUpdate(prevProps) {
    if (this.props.range) {
      if (this.props.range !== prevProps.range) {
        this.props.fetchStockPrices[this.props.range](this.props.stock);
      }
    }
    if (this.props.stock != prevProps.stock) {
      this.setState({ price: formatPrice(this.props.stock.price) });
    }
  }

  handleMouseMove({ isTooltipActive, activePayload }) {
    if (isTooltipActive) {
      this.setState({ price: formatPrice(activePayload[0].payload.price) });
    }
  }

  handleMouseLeave() {
    this.setState({ price: formatPrice(this.props.stock.price)});
  }

  render() {
    if (this.props.loading.prices[this.props.range] || this.props.loading.singleStock) {
      return (<Loading loading={this.props.loading.prices[this.props.range]} compName={"price-chart"} />);
    };
    const { prices, range } = this.props;
    if (!prices[range]) return null;
    const priceData = prices[range];
    const yDomain = [
      Math.min.apply(Math, priceData.map(obj => obj.price)),
      Math.max.apply(Math, priceData.map(obj => obj.price))
    ]
    let offset = -60;
    if (this.props.range === '1Y' || this.props.range === '5Y') {
      offset += 10;
    } else if (this.props.range === '1D') {
      offset += 30;
    }
    let color = (priceData[0].price > priceData[priceData.length - 1].price) ? '#ED5D2A' : '#5bc43b';
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
              margin={{ top: 5, bottom: 5 }}
            >
              <CartesianGrid vertical={false} horizontal={false} />
              <XAxis dataKey="date"
                // domain={xDomain}
                axisLine={false}/>
              <YAxis dataKey="price" domain={yDomain} axisLine={false} tick={false}/>
              <Tooltip
                content={<PriceChartTooltip range={this.props.range} />}
                position={{ y: -30 }}
                offset={offset}
                cursor={true} />
              <Line type="monotone" dataKey="price" strokeWidth="3" stroke={color} dot={false} isAnimationActive={true} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      )
    }

}



export default PriceChart;