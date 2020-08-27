import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, ReferenceLine, Tooltip, ResponsiveContainer,
} from 'recharts';
import numeral from 'numeral';
import PriceChartTooltip from './price_chart_tooltip';
import Loading from '../loading';
import { formatPrice } from '../../util/data_handling_util';

class PriceChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: null };
    this.baseState = { ...this.state };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  // componentDidMount() {
  //   this.setState({ price: formatPrice(this.props.stocks.summary.bySymbol[this.props.params.symbol]) });
  // }

  componentDidUpdate(prevProps) {
    if (this.props.range) {
      if (this.props.range !== prevProps.range) {
        this.props.fetchStockPrices[this.props.range](this.props.params.symbol);
      }
    }
    if (this.props.stocks.summary.bySymbol[this.props.params.symbol] !== prevProps.stocks.summary.bySymbol[prevProps.params.symbol]) {
      this.setState({ price: formatPrice(this.props.stocks.summary.bySymbol[this.props.params.symbol]) });
    }
    if (this.props.params.symbol !== prevProps.params.symbol) {
      this.props.fetchStockPrices[this.props.range](this.props.params.symbol)
      this.setState({ price: formatPrice(this.props.stocks.summary.bySymbol[this.props.params.symbol]) });
    }
    if (!this.state.price) {
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
    if (!this.state.price || !this.props.stocks.summary.bySymbol[this.props.params.symbol] || !this.props.prices[this.props.range].bySymbol[this.props.params.symbol]) {
      return (<Loading loading={(!this.state.price ||
          !this.props.stocks[this.props.params.symbol] ||
          !this.props.prices[this.props.range].bySymbol[this.props.params.symbol])}
        compName={"price-chart"}
        />);
    };
    const { range } = this.props;
    const prices = this.props.prices[range].bySymbol[this.props.params.symbol];
    const yDomain = [
      Math.min.apply(Math, prices.map(obj => obj.price)),
      Math.max.apply(Math, prices.map(obj => obj.price))
    ]
    let offset = -60;
    if (this.props.range === '1Y' || this.props.range === '5Y') {
      offset += 10;
    } else if (this.props.range === '1D') {
      offset += 40;
    }
    let color = (prices[0].price > prices[prices.length - 1].price) ? '#ED5D2A' : '#5bc43b';
    return (
      <div id="price-chart-container">
        <div className="price-chart-header">
          <h3>{this.props.stock.name}</h3>
          <h3>{this.state.price ? this.state.price : ''}</h3>
        </div>
        <div className="price-chart" >
            <ResponsiveContainer height="100%" width="100%" >
            <LineChart
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
              data={prices}
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            >
              <XAxis dataKey="date" axisLine={false} tick={false}/>
              <YAxis dataKey="price" domain={yDomain} axisLine={false} tick={false}/>
              <Tooltip
                content={<PriceChartTooltip range={this.props.range} />}
                position={{ y: -30 }}
                offset={offset}
                cursor={true} />
              <Line type="monotone" dataKey="price" strokeWidth="3" stroke={color} dot={false} isAnimationActive={true}/>
            </LineChart>
            </ResponsiveContainer>
        </div>
      </div>
      )
    }

}



export default PriceChart;