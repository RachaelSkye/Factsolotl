import * as actionTypes from "./actions";
import * as data from "./temp-data";

const initialState = {
  resultPb: ""
};

const reducer = (state = initialState, action) => {
  const error =
    "This zip code didn't match any public water systems in our database.";

  const resultPb =
    data.pws.ccr.analytes.lead.avgConc + data.pws.ccr.analytes.lead.units;

  switch (action.type) {
    
    case actionTypes.SUBMIT_ZIP:
      for (let i = 0; i < data.pws.zip.length; i++) {
        var z = data.pws.zip[i]
        console.log(i);
       
        if (action.zip === z) {
          return {
            ...state,
            resultPb: resultPb
          };
        } else {
          return {
            ...state,
            resultPb: error
          };
        }
      }
        
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
