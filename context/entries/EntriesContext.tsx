import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ContextProps {
  entries: Entry[], 

  // Methods
  addNewEntry: (description: string) => void,
  updateEntry: (entry: Entry, useSnackbar?: boolean) => void
  deleteEntry: (entry: Entry, useSnackbar?: boolean) => void
}

export const EntriesContext = createContext({} as ContextProps);