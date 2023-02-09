import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = 
  | {message: string}
  | IEntry
  | IEntry[]


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const {id} = req.query;

  if ( !mongoose.isValidObjectId(id) ) {
    return res.status(400).json({message: 'El id no es valido ' + id});
  }

  switch( req.method ) {

    case 'PUT':
      return updateEntry(req, res);
      
    case 'GET':
      return getEntry(req, res);

    default:
      return res.status(400).json({message: 'Metodo no existe'});

  }
  
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { id } = req.query;

  await db.connect();

  try {

    const foundEntry = await Entry.findById(id);
    await db.disconnect();
    return res.status(200).json(foundEntry!);

  } catch (error:any) {

      await db.disconnect();
      console.log(error);
      return res.status(400).json({ message: error.errors.status.message})
    
  }

}

const updateEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById( id );

  if ( !entryToUpdate ) {
    await db.disconnect();
    return res.status(400).json({message: 'No se encontro entrada con ese id ' + id});
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, {runValidators: true, new: true})  
    db.disconnect();
    res.status(200).json( updatedEntry! );
  } catch (error: any) {
      db.disconnect();
      console.log(error);
      res.status(400).json({ message: error.errors.status.message});
  }

  
  // entryToUpdate.description = description;
  // entryToUpdate.status = status;
  // await entryToUpdate.save();

  

}