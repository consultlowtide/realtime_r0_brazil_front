import React from 'react';
import { line } from 'd3-shape';

const LineLayer = (props) => {
  const { nodes, points, xScale, yScale } = props;

  const avgline = line()
    .x((d) => xScale(d?.data?.x))
    .y(() => yScale(1));

  return <path stroke="#DE372D" strokeWidth="1" d={avgline(nodes || points)} />;
};

export default LineLayer;
