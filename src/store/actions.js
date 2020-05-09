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

    dispatch({
      type: actionTypes.LOAD_MODEL_SUCCESS,
      payload: {
        data: data,
      },
    });

    return data;
  } catch (err) {
    dispatch({
      type: actionTypes.LOAD_MODEL_FAILURE,
    });
  }
};
