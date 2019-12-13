import * as actionTypes from "./actions";
import * as data from "./temp-data";

const initialState = {
  name: '',
  district: '',
  conc: 0,
  units: '',
  queried: false
};

const reducer = (state = initialState, action) => {
  const error =
    "This school didn't match any entries in our database.";
  let body = data.response.result.records
  const name = body[0].school_name;
  const district = body[0].district;
  const conc = body[0].result;
  const units = body[0].rpt_unit;

  switch (action.type) {
    
    case actionTypes.SUBMIT_QUERY:

        // if (action.query.includes(name)) {
          return {
            ...state,
            name: name,
            district: district,
            conc: conc,
            units: units,
            queried: true
          };
        // } else {
        //   return {
        //     ...state,
        //     name: error
        //   };
        // }
    default:
      return state;
  }
};

export default reducer;
