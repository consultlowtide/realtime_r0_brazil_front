import actionTypes from './action_types';
import { formatData } from '../utils/format-data';
// @ts-ignore
import caseData from '../caseData/latest.json';

export const getModelResults = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOAD_MODEL_REQUEST,
  });

  try {
    const data = await formatData(caseData.data);
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
