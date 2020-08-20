import React from 'react';
import moment from 'moment';

export default ({ active, payload, range }) => {
  if (!active) return null;
  const payloadDate = moment(payload[0].payload.date);
  let ttDate;
  if (range === '1D') {
    ttDate = payloadDate.format('LT');
  } else if (['1Y', '5Y'].includes(range)) {
    ttDate = payloadDate.format('MMM DD, YYYY');
  } else {
    ttDate = payloadDate.format('LT, MMM DD');
  }
  return (
    <div className="price-chart-tooltip">
      <p className="tooltip-time">{ttDate}</p>
    </div>
  );
};