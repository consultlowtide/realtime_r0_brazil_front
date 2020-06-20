import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import TooltipLine from './TooltipLine';
import { formatBarChartData } from 'utils';
import { palette } from '../../../theme';

const commonProperties = {
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
  const height = (rest.datum.high - rest.datum.low) * 200 + 14;

  return (
    <g>
      <rect
        width={12}
        rx={6}
        x={-6}
        height={height}
        y={-(rest.datum.high - rest.datum.low) * 100 - 5}
        fill={
          rest.datum.y.toFixed(2) >= 1
            ? palette.line.customSymbol.range.red
            : palette.line.customSymbol.range.green
        }
      />
      <div>{rest.datum.id}</div>
      <rect
        fill="#fff"
        width={26}
        height={14}
        rx={7}
        x={-13}
        y={-12}
        strokeWidth={1}
        stroke={
          rest.datum.y.toFixed(2) >= 1
            ? palette.line.customSymbol.border.red
            : palette.line.customSymbol.border.green
        }
      />
      <text
        x={-11}
        y={-1}
        letter-spacing="-0.75"
        width="auto"
        style={{ fontSize: '12px' }}
        fill={
          rest.datum.y.toFixed(2) >= 1
            ? palette.line.customSymbol.text.red
            : palette.line.customSymbol.text.green
        }
      >
        {rest.datum.province}
      </text>
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
    if (item.y < 1.0) {
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
        tickSize: 30,
      }}
      axisRight={{
        format: (v) => '',
        tickSize: 100,
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
        // LineLayer,
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
            line: {
              stroke: '#D8D8D8',
            },
            text: {
              fill: 'rgb(119, 118, 119)',
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
