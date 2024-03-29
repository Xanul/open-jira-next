import React, { FC, PropsWithChildren, useReducer } from 'react'
import { UiContext, uiReducer } from './';

// We define how we want our initial state to look with the interface
export interface UiState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

// We create our initial state with the interface of the UiState
const UI_INITIAL_STATE: UiState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
}

export const UiProvider:FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar'})
  }

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' })
  }

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({type: 'UI - Set isAddingEntry', payload: isAdding})
  }

  const startDragging = () => {
    dispatch({type: 'UI - Start Dragging'})
  }

  const endDragging = () => {
    dispatch({type: 'UI - End Dragging'})
  }

  // In the value we have to put the arguments defined in the ContextProvicer interface 
  return (
    <UiContext.Provider value={{
      ...state,

      // Methods
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry,
      startDragging,
      endDragging
    }}>
      { children }
    </UiContext.Provider>
  )
}
