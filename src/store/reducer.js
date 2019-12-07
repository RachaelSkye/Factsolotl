import * as actionTypes from './actions';
import * as data from './temp-data';

const initialState = {
  resultPb: '',
  zip: '',
  error: ''
}

const reducer = (state = initialState, action) => {
  const error = "This zip code didn't match any public water systems in our database."
  
  const resultPb  = data.pws.ccr.analytes.lead.avgConc + data.pws.ccr.analytes.lead.units
  switch (action.type) {
    case actionTypes.SUBMIT_ZIP:
     
      for (let i = 0; i <= data.pws.zip.length; i++)
      if (action.zip == data.pws.zip[i]) {
        return {
          ...state,
          resultPb: resultPb
        } 
        } else {
          console.log(action.zip)
          return {
            ...state,
            resultPb: error
          }
      }
      
     
  }
  return state;
}

export default reducer;