import actionTypes from './action_types';
import { formatData } from '../utils/format-data';
// @ts-ignore
import caseData from '../caseData/latest.json';
// @ts-ignore
import ontarioData from '../caseData/latest-ontario.json';

export const getModelResults = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOAD_MODEL_REQUEST,
  });

  try {
    const data = {
      canada: await formatData(caseData.data),
      ontario: await formatData(ontarioData.data),
    };

    const lastUpdatedTimestamp = caseData.last_updated_timestamp;

    dispatch({
      type: actionTypes.LOAD_MODEL_SUCCESS,
      payload: {
        data,
        lastUpdatedTimestamp,
      },
    });

    return data;
  } catch (err) {
    dispatch({
      type: actionTypes.LOAD_MODEL_FAILURE,
    });
  }
};
