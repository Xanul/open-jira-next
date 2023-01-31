import { List, Paper } from '@mui/material'
import React, { FC, useMemo } from 'react'
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { useContext, DragEvent } from 'react';
import { EntriesContext } from '../../context/entries';
import { UiContext } from '../../context/ui';
import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {

  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UiContext)

  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [entries])

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');

    const entry = entries.find( e => e._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();

  }

  return (
    // Todo: Aqui haremos drop
    <div
      onDrop={ onDropEntry }
      onDragOver={ allowDrop }
      className={ isDragging ? styles.dragging : '' }
    >
      <Paper sx={{ 
        height:'calc(100vh - 180px)', 
        overflow: 'scroll', 
        backgroundColor: 'transparent',
        '&::-webkit-scrollbar': { display: 'none' },
        padding: '2px 8px'
      }}>
        {/* Todo: Cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s'  }} >
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
