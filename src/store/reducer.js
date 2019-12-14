import * as actionTypes from "./actions";
import * as data from "./temp-data";
import v4 from "uuid/v4";

const initialState = {
  currentSchoolId: null,
  queried: false,
  schoolQuery: true,

  schools: [
    {
      name: "school",
      district: "district",
      county: "county",
      conc: 0,
      units: null,
      schoolId: null,
      details: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_SCHOOL_QUERY:
      let nameQuery = state.name;
      let countyQuery = state.county;
      let newSchoolId = v4();
      const error = "This school didn't match any entries in our database.";
      let body = data.response.result.records;
      console.log(state.schools)
      for (let i = 0; i < body.length; i++) {
        let _name = body[i].school_name.toUpperCase();
        if (_name.includes(nameQuery)) {
          let newSchool = {
            name: body[i].school_name,
            district: body[i].district,
            county: body[i].school_county,
            conc: body[i].result,
            units: body[i].rpt_unit,
            schoolId: newSchoolId,
            details: false
          };
          return {
            ...state,
            schools: [state.schools.concat(newSchool)],
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
      }
      break;
    // case actionTypes.SUBMIT_COUNTY_QUERY:
    //   if (county.includes(countyQuery)) {
    //     body.forEach(e => {
    //       let school = {
    //         name: e.name,
    //         district: e.district,
    //         county: e.county,
    //         conc: e.conc,
    //         units: e.units,
    //         schoolId: e.newSchoolId
    //       };
    //       return {
    //         ...state,
    //         shools: state.schools.concat(school),
    //         schoolQuery: false,
    //         queried: true
    //       };
    //     });
    //   } else {
    //     return {
    //       ...state,
    //       error: error,
    //       schoolQuery: false
    //     };
    //   }
    //   break;
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

      case actionTypes.SET_CURRENT_SCHOOL_ID:
      return {
        ...state,
        currentSchoolId: action.id
      };

    case actionTypes.TOGGLE_DETAILS:
      return {
        ...state,
        details: true
      };

    default:
      return state;
  }
};

export default reducer;
