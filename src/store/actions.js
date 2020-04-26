import actionTypes from './action_types';
import { caseData } from '../caseData';
import { formatData } from '../utils/format-data';

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
    console.log('within actions:', data);

    return data;
  } catch (err) {
    dispatch({
      type: actionTypes.LOAD_MODEL_FAILURE,
    });
  }
};
