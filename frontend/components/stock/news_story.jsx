import React from 'react';
import moment from 'moment';

export default ({ date, headline, source, summary, image }) => (
  <li>
    <p>{source}</p>
    <p>{moment(date), fromNow()}</p>
    <h4>{headline}</h4>
    <p>{summary}</p>
    <img src={image} />
  </li>
);