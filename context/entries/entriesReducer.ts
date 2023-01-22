import { EntriesState } from './';

type EntriesActionType = 
  | { type: 'Entries - ActionName' }

// The reducer cannot modify the state, it must retrun a new state 
export const entriesReducer = (state: EntriesState, action: EntriesActionType):EntriesState => {
  
  switch (action.type) {
    // case 'Entries - ActionName':
    //   return {
    //     ...state,
    //   }

    default:
      return state;
  }
}