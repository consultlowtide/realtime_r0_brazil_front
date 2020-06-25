import moment from 'moment';

export async function formatData(data) {
  try {
    return await data.map(({ province, date, ML, High_90, Low_90 }) => [
      province,
      moment.unix(date).format('YYYY-MM-DD'),
      ML,
      Low_90,
      High_90,
    ]);
  } catch (err) {
    console.error(err);
  }
}
