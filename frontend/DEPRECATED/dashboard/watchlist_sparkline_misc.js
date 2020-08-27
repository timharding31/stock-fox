// import React from 'react';
// import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// if (!this.props.prices[this.props.range]) return null;
// const priceData = this.props.prices[this.props.range].map(obj => obj.price);
// const yDomain = [
//   Math.min.apply(Math, priceData),
//   Math.max.apply(Math, priceData)
// ]
// // const xDomain = [
// //   Math.min.apply(Math, data.map(obj => obj.date)),
// //   Math.max.apply(Math, data.map(obj => obj.date))
// // ]
// return (
//   <div id="price-chart-container">
//     <Sparklines min={yDomain[0]} max={yDomain[1]} data={priceData} width={1000} height={400}>
//       <SparklinesLine />
//     </Sparklines>
//     )