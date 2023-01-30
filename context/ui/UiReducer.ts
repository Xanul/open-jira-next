// The reducer must be able to resolve all the logic inside this function
// It recivesand state and and action

// We import our interface (from uiProvider)
// export interface UiState {
//   sidemenuOpen: boolean;
// }

import { UiState } from "./";

type UiActionType = 
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Set isAddingEntry', payload: boolean }
  | { type: 'UI - Start Dragging' }
  | { type: 'UI - End Dragging' }
  

// The reducer cannot modify the state, it must retrun a new state 
export const uiReducer = (state: UiState, action: UiActionType):UiState => {
  
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      }
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      }
    case 'UI - Set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload 
      }
    case 'UI - Start Dragging':
      return {
        ...state,
        isDragging: true
      }
    case 'UI - End Dragging':
      return {
        ...state,
        isDragging: false
      }
  
    default:
      return state;
  }
  
}