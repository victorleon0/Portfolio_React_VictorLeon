import * as actions from './like.counter.actions';

const INITIAL_STATE = {
  count: 1460,
  lastCount: null,
  counterName: "WebLikes",
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "COUNTER_INCREASE": {
      const newState = {
        ...state,
        count: state.count + 1,
        lastCount: state.count,
      };
      return newState;
    }
    

    default: {
      return state;
    }
  }
};

export default counterReducer;
