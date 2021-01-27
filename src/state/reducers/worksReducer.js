import { types } from "../types/types";

const initialState = {
  listWork: [],
  owner: 'Samir Ruidiaz'
}

export const worksReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.works:
      return {
        ...state,
        listWork: action.payload
      }
  
    default:
      return state;
  }

}