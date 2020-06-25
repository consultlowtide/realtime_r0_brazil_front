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
      return {
        ...state,
        data: {
          ...state.data,
          canada: {
            provinces: payload?.data?.canada?.data,
            lastUpdatedTimestamp:
              moment
                .unix(payload?.data?.canada?.lastUpdatedTimestamp)
                .format('MMMM D [at] h:mm a') ||
              'Uh oh, there has been an error!',
          },
          ontario: {
            regions: payload?.data?.ontario?.data,
            lastUpdatedTimestamp:
              moment
                .unix(payload?.data.ontario.lastUpdatedTimestamp)
                .format('MMMM D [at] h:mm a') ||
              'Uh oh, there has been an error!',
          },
        },
        loading: false,
        error: false,
      };
    }

    default:
      return state;
  }
};
