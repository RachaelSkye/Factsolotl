import * as actionTypes from './actions'

const initialState = {
  input: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_ZIP:
      return state;
  }
}

export default reducer;