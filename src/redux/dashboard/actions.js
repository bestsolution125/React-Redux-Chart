const actions = {
  GET_BAR_REQUEST: 'GET_BAR_REQUEST',
  GET_BAR_SUCCESS: 'GET_BAR_SUCCESS',
  GET_BAR_ERROR: 'GET_BAR_ERROR',
  GET_LINE_REQUEST: 'GET_LINE_REQUEST',
  GET_LINE_SUCCESS: 'GET_LINE_SUCCESS',
  GET_LINE_ERROR: 'GET_LINE_ERROR',
  GET_PIE_REQUEST: 'GET_PIE_REQUEST',
  GET_PIE_SUCCESS: 'GET_PIE_SUCCESS',
  GET_PIE_ERROR: 'GET_PIE_ERROR',
  getBarData: () => ({
    type: actions.GET_BAR_REQUEST,
  }),
  getLineData: () => ({
    type: actions.GET_LINE_REQUEST,
  }),
  getPieData: () => ({
    type: actions.GET_PIE_REQUEST,
  })
};

export default actions;
