import React from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

export const NewEntry = () => {
  return (
    <Box sx={{marginBottom: 2, paddingX:1}}>

      <Button
        startIcon={<AddIcon />}
        fullWidth
        variant='outlined'
      >
        Agregar Tarea
      </Button>

      <TextField 
        fullWidth
        sx={{ marginTop: 2, marginBottom: 3 }}
        placeholder='Nueva Entrada'
        autoFocus
        multiline
        label='Nueva entrada'
        helperText='Ingrese un valor'
      />

      <Box display='flex' justifyContent='space-between'>
        <Button 
          variant='outlined' 
          color='error'
          sx={{ opacity: 0.8 }}
        >
          Cancelar
        </Button>
        <Button 
          variant='outlined' 
          color='secondary' 
          endIcon={ <SaveIcon /> }
        >
          Guardar
        </Button>
      </Box>

    </Box>
  )
}
