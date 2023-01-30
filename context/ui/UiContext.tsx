import { createContext } from 'react';

// This file is used to create the context, we need to import createContext from react

// We define how we want out context to look with their types
interface ContextProps {
  sidemenuOpen: boolean,
  isAddingEntry: boolean,
  isDragging: boolean,
  // Methods
  openSideMenu: () => void,
  closeSideMenu: () => void,
  setIsAddingEntry: (isAdding: boolean) => void,
  startDragging: () => void,
  endDragging: () => void,
}



// We declare the type of the object inside of UiContext to have the types defined in the interface
export const UiContext = createContext({} as ContextProps);

