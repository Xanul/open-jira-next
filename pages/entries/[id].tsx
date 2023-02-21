import { ChangeEvent, FC, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next'
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Layout } from "../../components/layouts";
import { Entry, EntryStatus } from "../../interfaces";
import { dbEntries } from '../../database';

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry
}

export const EntryPage:FC<Props> = ( props ) => {
  
  console.log({props});

  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<EntryStatus>('pending');
  const [touched, setTouched] = useState(false);
  const isInvalid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

  const onInputValueChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    setInputValue( event.target.value )
  }

  const onStatusChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    setStatus( event.target.value as EntryStatus )
  }

  const onSave = () => {
    console.log({inputValue, status});
  }

  return (
    <Layout title="... ... ...">
      <>
        <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardHeader
                title={ (inputValue.length <= 0) ? "Titulo" : `${inputValue}` }
                subheader={`Creada hace: ....minutos`}
              />
              <CardContent>
                <TextField
                  sx={{ marginTop: 2, marginBottom: 1 }}
                  fullWidth
                  placeholder="Nueva Entrada"
                  autoFocus
                  multiline
                  label="Nueva Entrada"
                  value={ inputValue }
                  onChange={ onInputValueChange }
                  helperText={ isInvalid && "Ingrese un valor" }
                  error={ isInvalid }
                  onBlur={ () => setTouched(true) }
                />
                <FormControl>
                  <FormLabel>Estado: </FormLabel>
                  <RadioGroup 
                    row
                    value={ status }
                    onChange={ onStatusChange }
                  >
                    {validStatus.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={capitalize(option)}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<SaveOutlinedIcon />}
                  variant="contained"
                  fullWidth
                  onClick={ onSave }
                  disabled={ inputValue.length <= 0 }
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <IconButton
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            backgroundColor: "error.dark",
          }}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </>
    </Layout>
  );
};




export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById( id );

  if ( !entry ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      entry: JSON.stringify(entry._id)
    }
  }
}

export default EntryPage;
