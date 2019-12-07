import * as actionTypes from './actions';
import * as data from './temp-data';

const initialState = {
  resultPb: ''
}

const reducer = (state = initialState, action) => {
  const resultPb  = data.pws.ccr.analytes.lead.avgConc + data.pws.ccr.analytes.lead.units
  // eslint-disable-next-line
  switch (action.type) {
    case actionTypes.SUBMIT_ZIP:
      for (let i = 0; i <= data.pws.zip; i++)
      if (action.input === data.pws.zip[i]) {
        
        return {
          ...state,
          resultPb: resultPb
        }
      }
      return {
        ...state
      }
  }
  return state;
}

export default reducer;