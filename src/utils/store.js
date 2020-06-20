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

export const ONTARIO_REGIONS = {
  ALG: 'Algoma',
  BRT: 'Brant County',
  CHK: 'Chatham-Kent',
  DUR: 'Durham Region',
  EST: 'Eastern Ontario',
  GRB: 'Grey Bruce',
  HNF: 'Haldimand-Norfolk',
  HKP: 'Haliburton, Kawartha, Pine Ridge District',
  HAL: 'Halton Region',
  HAM: 'Hamilton',
  PEC: 'Hastings and Prince Edward Counties',
  HRP: 'Huron Perth',
  KGN: 'Kingston, Frontenac and Lennox & Addington',
  LAM: 'Lambton',
  LGL: 'Leeds, Grenville and Lanark District',
  LON: 'Middlesex-London',
  NIA: 'Niagara Region',
  NBP: 'North Bay Parry Sound District',
  NWT: 'Northwestern',
  OTT: 'Ottawa',
  PEL: 'Peel',
  PET: 'Peterborough',
  POR: 'Porcupine',
  WAT: 'Region of Waterloo',
  REN: 'Renfrew County and District',
  MUS: 'Simcoe Muskoka District',
  SWT: 'Southwestern',
  SUD: 'Sudbury and District',
  TBA: 'Thunder Bay District',
  TIM: 'Timiskaming',
  TOR: 'Toronto',
  GUE: 'Wellington-Dufferin-Guelph',
  WIN: 'Windsor-Essex County',
  YRK: 'York Region',
};

export const getLastTimestamp = (data) => data?.[data?.length - 1][1];

export const getLastRtValue = (data = {}, id = '') =>
  data?.[id]?.[data[id].length - 1]?.y.toFixed(2);

export const formatListData = (data) => {
  return data?.reduce((current, next) => {
    const [id, x, y, low, high] = next;
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
