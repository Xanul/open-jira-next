import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryCard } from './';

export const EntryList = () => {
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
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  )
}
