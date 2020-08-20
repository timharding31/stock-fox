import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class PriceChart extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.range) {
      if (this.props.range !== prevProps.range) {
        this.props.fetchStockPrices[this.props.range](this.props.stock);
      }
    }
  }

  render() {
    if (!this.props.prices[this.props.range]) return null;
    const data = this.props.prices[this.props.range];
    const yDomain = [
      Math.min.apply(Math, data.map(obj => obj.price)),
      Math.max.apply(Math, data.map(obj => obj.price))
    ]
    const xDomain = [
      Math.min.apply(Math, data.map(obj => obj.date)),
      Math.max.apply(Math, data.map(obj => obj.date))
    ]
    return (
      <div id="price-chart-container">
        <LineChart
          width={1000}
          height={400}
          data={this.props.prices[this.props.range]}
          margin={{
            // top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="date" domain={xDomain}/>
          <YAxis dataKey="price" domain={yDomain} axisLine={false} tick={false}/>
          <Tooltip cursor={false} coordinate={{ x: 100, y: 140 }} />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#5bc43b" dot={false} isAnimationActive={true} />
        </LineChart>
      </div>
      )
    }

}



export default PriceChart;