import { ObjectId } from "mongodb";
import getconnection from "../conexion/connection";
import {comentarios} from "../models/comentarios";


export const listar = async (): Promise<comentarios[]> => {
  try {
    let rs: comentarios[] = [];
    const mongo = getconnection();
    const collection = mongo.db.collection("comentarios");
    const resultados = await collection.find({}).toArray();
    rs = resultados.map((item)=>new comentarios(item._id, item.blog,
        item.usuarios,item.fechaCreacion));
    await mongo.cliente.close();  
    return rs;
  } catch (error) {
    throw error;
  }
}

export const insertar = async (p:comentarios): Promise<Boolean> => {
  try {      
    const mongo = getconnection();
    const collection = mongo.db.collection("comentarios");
    const resultados = await collection.insertOne(p);      
    await mongo.cliente.close();
    return resultados.acknowledged ;
  } catch (error) {
    throw error;
  }
}

export const actualizar= async (p:comentarios): Promise<Boolean> => {
  try {      
    const mongo = getconnection();
    const collection = mongo.db.collection("comentarios");
    const resultados = await collection.updateOne({_id:new ObjectId(p._id)},p);      
    await mongo.cliente.close();
    return resultados.acknowledged ;
  } catch (error) {
    throw error;
  }
}

export const eliminar = async (id: string): Promise<Boolean> => {
  try {
    const mongo = getconnection();
    const collection = mongo.db.collection("comentarios");
    const resultados = await collection.deleteOne({_id: new ObjectId(id)});
    await mongo.cliente.close();
    return resultados.deletedCount > 0;
  } catch (error) {
    throw error;
  }
}


