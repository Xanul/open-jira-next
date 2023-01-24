import { List, Paper } from '@mui/material'
import React, { FC, useMemo } from 'react'
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { useContext } from 'react';
import { EntriesContext } from '../../context/entries';

interface Props {
  status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {

  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [entries])


  return (
    // Todo: Aqui haremos drop
    <div>
      <Paper sx={{ 
        height:'calc(100vh - 180px)', 
        overflow: 'scroll', 
        backgroundColor: 'transparent',
        '&::-webkit-scrollbar': { display: 'none' },
        padding: '2px 8px'
      }}>
        {/* Todo: Cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: 1 }} >
          {
            entriesByStatus.map( entry => (
              <EntryCard key={ entry._id } entry={ entry }/>
            ))
          }
        </List>
      </Paper>
    </div>
  )
}
