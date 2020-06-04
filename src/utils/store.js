import { dateObjectBuider } from 'utils';

export const CANADIAN_PROVINCES = {
  AB: 'Alberta',
  ON: 'Ontario',
  BC: 'British Columbia',
  SK: 'Saskatchewan',
  MB: 'Manitoba',
  QB: 'Quebec',
  PEI: 'Prince Edward Island',
  NB: 'New Brunswick',
  NS: 'Nova Scotia',
  YT: 'Yukon',
  NWT: 'Northwest Territories',
  NL: 'Newfoundland and Labrador',
};

export const getLastTimestamp = (data) => data?.[data?.length - 1][1];

export const getLastRtValue = (data = {}, id = '') =>
  data?.[id]?.[data[id].length - 1]?.y.toFixed(2);

export const formatListData = (data) => {
  return data?.reduce((current, next) => {
    const [id, x, y, low, high, newCases, smoothedCases] = next;
    const date = dateObjectBuider(x);

    return {
      ...current,
      [id]: (current[id] || []).concat({
        id,
        province: id,
        date,
        x: date,
        y,
        low,
        high,
      }),
    };
  }, {});
};

export const formatBarChartData = (data) => {
  const formattedData = formatListData(data) || {};
  return Object.keys(formattedData)?.map(
    (k) => formattedData[k][formattedData[k].length - 1]
  );
};
