import actions from './actions';

const iniState = {
  isLoading: false,
  bar: [],
  line: [],
  pie: []
};
export default function dashboardReducer(state = iniState, action) {
  console.log(action);
  switch (action.type) {
    case actions.GET_BAR_SUCCESS:
      return {
        ...state,
        bar: action.payload
      };
    case actions.GET_LINE_SUCCESS:
      return {
        ...state,
        line: action.payload
      };
    case actions.GET_PIE_SUCCESS:
      return {
        ...state,
        pie: action.payload
      };
    default:
      return state;
  }
}
