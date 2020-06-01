import { fullFormatDate, getLastTimestamp, dateObjectBuider } from 'utils';
import actionTypes from './action_types';
import moment from 'moment';

const initialState = {
  data: null,
  error: false,
  loading: false,
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case actionTypes.LOAD_MODEL_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case actionTypes.LOAD_MODEL_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case actionTypes.LOAD_MODEL_SUCCESS: {
      const date = dateObjectBuider(payload.lastUpdatedTimestamp);

      return {
        ...state,
        data: {
          ...state.data,
          provinces: payload?.data,
          lastUpdatedTimestamp: moment
            .unix(payload?.lastUpdatedTimestamp)
            .format('MMMM D YYYY @ h:mm a'),
        },
        loading: false,
        error: false,
      };
    }

    default:
      return state;
  }
};
