import React from 'react';
import { ScatterPlot } from '@nivo/scatterplot';

import { formatDate } from 'utils';

import {
  AreaLayerNegative,
  AreaLayerPositive,
} from 'components/charts/AreaLayer';
import LineLayer from 'components/charts/LineLayer';
import TooltipScatter from './TooltipScatter';

const commonProps = {
  width: 300,
  height: 200,
  margin: { top: 10, right: 30, bottom: 10, left: 10 },
  nodeSize: 2,
  blendMode: 'normal',
  yScale: {
    type: 'linear',
    min: 0.6,
    max: 1.6,
  },
  xScale: { type: 'time' },
  yFormat: (d) => d.toFixed(2),
  enableGridX: false,
  axisBottom: null,
  axisTop: null,
  axisLeft: null,
  axisRight: {
    orient: 'left',
    tickSize: 2,
    tickValues: 5,
    tickPadding: 5,
    tickRotation: 0,
    format: (d) => d.toFixed(1),
  },
  colors: '#DE372D',
  layers: [
    AreaLayerPositive,
    AreaLayerNegative,
    'grid',
    'axes',
    'nodes',
    LineLayer,
    'mesh',
  ],
  useMesh: true,
  xFormat: formatDate,
};

const RiskScatterPlot = ({ data }) => (
  <ScatterPlot
    {...commonProps}
    data={data}
    tooltip={({ node }) => <TooltipScatter data={node?.data} />}
    theme={{
      axis: {
        ticks: {
          text: {
            fill: '#777677',
            fontFamily: 'IBM Plex Sans, sans-serif',
          },
        },
      },
      grid: {
        line: {
          stroke: '#D8D8D8',
        },
      },
    }}
  />
);

export default RiskScatterPlot;
