import * as actionTypes from "./actions";
import * as data from "./temp-data";
import v4 from "uuid/v4";

const initialState = {
  currentSchoolId: 0,
  queried: false,
  schoolQuery: true,

  schools: [
    {
    name: "school",
    district: "district",
    county: "county",
    conc: 0,
    units: null,
    schoolId: 0
  },
]
};

const reducer = (state = initialState, action) => {
  const error = "This school didn't match any entries in our database.";
  let body = data.response.result.records;
  let name = body[0].school_name.toUpperCase();
  let district = body[0].district.toUpperCase();
  let conc = body[0].result;
  let units = body[0].rpt_unit;
  let county = body[0].school_county.toUpperCase();

  switch (action.type) {
    case actionTypes.SUBMIT_SCHOOL_QUERY:
      let nameQuery = state.name;
      let countyQuery = state.county;
      let schoolId = v4();

      if (name.includes(nameQuery)) {
        return {
          ...state,
          schools: [{
            name: name,
            district: district,
            county: county,
            conc: conc,
            units: units,
            schoolId: schoolId,
            details: false
          }],

          schoolQuery: true,
          queried: true
        };
      } else {
        return {
          ...state,
          error: error,
          schoolQuery: true
        };
      }
      case actionTypes.SUBMIT_COUNTY_QUERY:
        if (county.includes(countyQuery)) {
          body.forEach(e => {
            let school = {
              name: e.name,
              district: e.district,
              county: e.county,
              conc: e.conc,
              units: e.units,
              schoolId: e.schoolId
            };
            return {
              ...state,
              shools: state.schools.concat(school),
              schoolQuery: false,
              queried: true
            };
          });
        } else {
          return {
            ...state,
            error: error,
            schoolQuery: false
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

      case actionTypes.TOGGLE_DETAILS:
        return {
          ...state,
          currentSchoolId: action.id,
          details: true
        };

      default:
        return state;
  }
};

export default reducer;