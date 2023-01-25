import React, { ChangeEvent, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UiContext } from '../../context/ui';

export const NewEntry = () => {
  
  
  const { isAddingEntry, setIsAddingEntry } = useContext(UiContext);


  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);

  const onTextFieldChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    setInputValue( event.target.value )
  }

  const onSave = () => {

    if (inputValue.length === 0) return;

    addNewEntry(inputValue);

    setInputValue('');
    setIsAddingEntry(false);
    setTouched(false);

  }

  return (
    <Box sx={{marginBottom: 2, paddingX:1}}>

      {
        isAddingEntry ? (
          <>
            <TextField 
              fullWidth
              sx={{ marginTop: 2, marginBottom: 3 }}
              placeholder='Nueva Entrada'
              autoFocus
              multiline
              label='Nueva entrada'
              helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor' }
              error={ inputValue.length <= 0 && touched}
              value={inputValue}
              onChange={ onTextFieldChange }
              onBlur={ () => setTouched(true)}
            />

            <Box display='flex' justifyContent='space-between'>
              <Button 
                variant='outlined' 
                color='error'
                sx={{ opacity: 0.8 }}
                onClick={() => {
                  setIsAddingEntry(false)
                }}

              >
                Cancelar
              </Button>
              <Button 
                variant='outlined' 
                color='secondary' 
                endIcon={ <SaveIcon /> }
                onClick={ onSave }
              >
                Guardar
              </Button>
            </Box>
          </>
        ) 
        
        : (
          <>
            <Button
              startIcon={<AddIcon />}
              fullWidth
              variant='outlined'
              onClick={() => setIsAddingEntry(true)}
            >
              Agregar Tarea
            </Button>
          </>
        )
      }

      

      

    </Box>
  )
}
