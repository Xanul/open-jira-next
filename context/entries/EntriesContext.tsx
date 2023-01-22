import { createContext } from 'react';

interface ContextProps {
  entries: [], // todo: Falta el tipo de dato del arreglo
}

export const EntriesContext = createContext({} as ContextProps);