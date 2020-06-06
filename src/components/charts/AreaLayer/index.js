import React from 'react';
import { area, curveMonotoneX } from 'd3-shape';
import { palette } from '../../../theme';

const AreaLayerNegative = ({ nodes, xScale, yScale }) => {
  const areaGenerator = area()
    .x((d) => xScale(d.data.x))
    .y0((d) => yScale(d.data.high))
    .y1((d) => yScale(d.data.low >= 1 ? d.data.low : 1))
    .curve(curveMonotoneX);

  return <path d={areaGenerator(nodes)} fill={palette.area.red} />;
};

const AreaLayerPositive = ({ nodes, xScale, yScale }) => {
  const areaGenerator = area()
    .x((d) => xScale(d.data.x))
    .y0((d) => yScale(d.data.high >= 1 ? d.data.high : 1))
    .y1((d) => yScale(d.data.low))
    .curve(curveMonotoneX);

  return <path d={areaGenerator(nodes)} fill={palette.area.green} />;
};

const AreaLayer = ({ nodes, xScale, yScale }) => {
  const areaGenerator = area()
    .x((d) => xScale(d.data.x))
    .y0((d) => yScale(d.data.low))
    .y1((d) => yScale(d.data.high))
    .curve(curveMonotoneX);

  return <path d={areaGenerator(nodes)} fill="rgba(200, 200, 200, 0.3)" />;
};

export { AreaLayer, AreaLayerPositive, AreaLayerNegative };
