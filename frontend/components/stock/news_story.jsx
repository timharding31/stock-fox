import React from 'react';
import moment from 'moment';

export default ({ publishedAt, url, title, source, description, urlToImage, idx }) => (
  <a href={url} target="_blank">
    <div className="news-story-text">
      <div className="news-top-line"><p className="news-source">{source} </p><p className="news-date">{moment(new Date(publishedAt)).fromNow()}</p></div>
      <h4 className="news-headline">{title.substring(0,75) + (title.length > 75 ? " ..." : '')}</h4>
      <p className="news-description">{`${description.replace(/(<([^>]+)>)/ig, '').substring(0, 100)} ...`}</p>
    </div>
    <div className="news-story-img">
      <img src={urlToImage} width="80px" />
    </div>
  </a>
);