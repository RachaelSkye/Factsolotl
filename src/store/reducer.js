import * as actionTypes from './actions';
import * as data from './temp-data';

const initialState = {
  resultPb: '',
  zip: ''
}

const reducer = (state = initialState, action) => {
  const resultPb  = data.pws.ccr.analytes.lead.avgConc + data.pws.ccr.analytes.lead.units
  switch (action.type) {
    case actionTypes.SUBMIT_ZIP:
      // for (let i = 0; i <= data.pws.zip; i++)
      // if (action.input === data.pws.zip[i]) {
        console.log(state.resultPb);
        return {
          ...state,
          resultPb: resultPb
        }
      
     
  }
  return state;
}

export default reducer;