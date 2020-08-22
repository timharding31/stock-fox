import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default ({ data, color }) => {
  data = data.map(obj => obj.price);
  return (
    <div id="mini-chart">
        <Sparklines
          min={Math.min.apply(Math, data)}
          max={Math.max.apply(Math, data)}
          data={data}
        >
        <SparklinesLine style={{ strokeWidth: 3, stroke: color, fill: "none" }} />
          <SparklinesReferenceLine
            type="median"
            style={{ stroke: 'gainsboro', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
        </Sparklines>
      </div>)
}