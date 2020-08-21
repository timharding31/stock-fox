import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

export default ({ loading, compName }) => (
  <div className={`loading-${compName}`}>
    <ScaleLoader
      loading={loading}
      color={"#5bc43b"}
    />
  </div>
);