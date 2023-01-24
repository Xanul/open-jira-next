import React, { ChangeEvent, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

export const NewEntry = () => {
  
  const [isAdding, setIsAdding] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    setInputValue( event.target.value )
  }

  const onSave = () => {

    if (inputValue.length === 0) return;

    console.log(inputValue);

  }

  return (
    <Box sx={{marginBottom: 2, paddingX:1}}>

      {
        isAdding ? (
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
                  setIsAdding(false)
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
              onClick={() => setIsAdding(true)}
            >
              Agregar Tarea
            </Button>
          </>
        )
      }

      

      

    </Box>
  )
}
