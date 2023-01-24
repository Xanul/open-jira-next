import React, { FC, PropsWithChildren, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';



export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente: lorem ipsum prodient dolo duis et dolor laborum veniam ea laboris qui consequat',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'En Progreso: lorem ipsum prodient dolo duis et dolor laborum veniam ea laboris qui consequat',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: 'Terminada: lorem ipsum prodient dolo duis et dolor laborum veniam ea laboris qui consequat',
      status: 'finished',
      createdAt: Date.now() - 200000,
    }
  ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);



  return (
    <EntriesContext.Provider value={{
      ...state,
    }}>
      { children }
    </EntriesContext.Provider>
  )
}