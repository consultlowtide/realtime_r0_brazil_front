import moment from 'moment';

// const old = {
//   High_90: 4.46,
//   Low_90: 0.8200000000000001,
//   ML: 2.4,
//   date: 1587366000,
//   province: 'YT',
// };

// const new = ['AC', '2020-03-17', 3, 0.86, 6.84, 3, 3, 0, 0];

export async function formatData(data) {
  await console.log(
    data.map(({ province, date, ML, High_90, Low_90 }) => [
      province,
      moment.unix(date).format('YYYY-MM-DD'),
      ML,
      Low_90,
      High_90,
    ])
  );
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

//format date
