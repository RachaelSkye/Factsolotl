import * as actionTypes from "./actions";
import * as data from "./temp-data";

const initialState = {
  name: "school",
  district: "district",
  county: "county",
  conc: 0,
  units: null,
  queried: false,
  schoolQuery: true,
  schools: []
};

const reducer = (state = initialState, action) => {
  const error = "This school didn't match any entries in our database.";
  const body = data.response.result.records;
  const name = body[0].school_name.toUpperCase();
  const district = body[0].district.toUpperCase();
  const conc = body[0].result;
  const units = body[0].rpt_unit;
  const county = body[0].school_county.toUpperCase();

  switch (action.type) {
    case actionTypes.SUBMIT_SCHOOL_QUERY:
      const nameQuery = state.name;
      const countyQuery = state.county;

      if (name.includes(nameQuery)) {
        return {
          ...state,
          name: name,
          district: district,
          county: county,
          conc: conc,
          units: units,
          schoolQuery: true,
          queried: true
        };
      } else {
        return {
          ...state,
          name: error
        };
      }
    case actionTypes.SUBMIT_COUNTY_QUERY:
      if (county.includes(countyQuery)) {
        body.forEach(school => {
          let details = {
            ...state,
            name: school.name,
            district: school.district,
            county: school.county,
            conc: school.conc,
            units: school.units,
            schoolQuery: false,
            queried: school.true
          };
          return {
            ...state,
            shools: state.schools.concat(details)
          };
        });
      } else {
        return {
          ...state,
          name: error
        };
      }
      break;
    case actionTypes.TOGGLE_QUERY_TYPE:
      return {
        schoolQuery: !state.schoolQuery
      };

    case actionTypes.SET_SCHOOL_QUERY:
      let setSchool = action.query.toUpperCase();
      return {
        name: setSchool
      };

    case actionTypes.SET_COUNTY_QUERY:
      let setCounty = action.query.toUpperCase();
      return {
        county: setCounty
      };

    default:
      return state;
  }
};

export default reducer;
