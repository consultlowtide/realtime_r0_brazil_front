import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import LineLayer from 'components/charts/LineLayer';
import TooltipLine from './TooltipLine';
import { formatBarChartData } from 'utils';

const commonProperties = {
  // width: 1000,
  margin: { top: 20, right: 100, bottom: 60, left: 70 },
  animate: true,
  enableSlices: false,
};

const compare = (a, b) => {
  const firstY = a.y;
  const secondY = b.y;

  let comparison = 0;

  if (firstY > secondY) {
    comparison = 1;
  } else if (firstY < secondY) {
    comparison = -1;
  }

  return comparison;
};

const CustomSymbol = ({
  size,
  color,
  borderWidth = 12,
  borderColor,
  ...rest
}) => {
  const height = (rest.datum.high - rest.datum.low) * 100;

  return (
    <g>
      <rect
        width={12}
        rx={12}
        x={-6}
        height={height}
        y={(-(rest.datum.high - rest.datum.low) * 100) / 2}
        fill={rest.datum.y > 1 ? '#FFDAD2' : '#C7F5C0'}
      />
      <div>{rest.datum.id}</div>
      <rect
        fill="#fff"
        width={25}
        height={15}
        rx={7}
        x={-12}
        y={0}
        strokeWidth={1}
        stroke={rest.datum.y > 1 ? '#ED6453' : '#40CC7E'}
      />
      {/* <ellipse cx="4" cy="6" rx="24" ry="12" style={{ position: 'relative' }}> */}
      <text
        x={-8}
        y={12}
        width="auto"
        style={{ fontSize: '12px' }}
        fill={rest.datum.y > 1 ? '#ED6453' : '#40CC7E'}
      >
        {rest.datum.province}
      </text>
      {/* </ellipse> */}
    </g>
  );
};

const Line = ({ data: content }) => {
  const data = formatBarChartData(content);

  const mapper = {
    positive: [],
    negative: [],
  };

  const orderedData = data.sort(compare);

  orderedData.forEach((item, index) => {
    if (item.y < 1) {
      mapper.negative[index] = {
        ...item,
        x: index,
      };
      mapper.positive[index] = {
        ...item,
        x: index,
        y: null,
      };
    } else {
      mapper.positive[index] = {
        ...item,
        x: index,
      };
      mapper.negative[index] = {
        ...item,
        x: index,
        y: null,
      };
    }
  });

  const chartData = [
    {
      id: 'positive',
      data: mapper.positive,
    },
    {
      id: 'negative',
      data: mapper.negative,
    },
  ];

  return (
    <ResponsiveLine
      {...commonProperties}
      data={chartData}
      curve="monotoneX"
      pointSymbol={CustomSymbol}
      pointLabel="id"
      pointSize={14}
      pointBorderWidth={4}
      pointBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.3]],
      }}
      enableGridX={false}
      xScale={{
        type: 'point',
      }}
      yScale={{
        type: 'linear',
        stacked: false,
        min: 0,
        max: 2,
      }}
      axisLeft={{
        format: (d) => d.toFixed(1),
        tickPadding: 20,
      }}
      axisBottom={null}
      tooltip={({ point }) => <TooltipLine data={point?.data} />}
      enableArea={false}
      areaOpacity={0.0}
      useMesh={true}
      crosshairType="cross"
      lineWidth={0}
      layers={[
        'grid',
        LineLayer,
        'axes',
        'markers',
        'lines',
        'points',
        'slices',
        'mesh',
        'legends',
      ]}
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
};

export default Line;
