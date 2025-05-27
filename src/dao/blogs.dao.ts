import { ObjectId } from "mongodb";
import getconnection from "../conexion/connection";
import { blogs } from "../models/blogs";

export const listar = async (): Promise<blogs[]> => {
  try {
    let rs: blogs[] = [];
    const mongo = getconnection();
    const collection = mongo.db.collection("blogs");
    const resultados = await collection.find({}).toArray();
    rs = resultados.map((item)=>new blogs(item._id,item.nombre,
        item.correo,item.fechaCreacion));
    await mongo.cliente.close();  
    return rs;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const insertar = async (p:blogs): Promise<Boolean> => {
  try {      
    const mongo = getconnection();
    const collection = mongo.db.collection("blogs");
    const resultados = await collection.insertOne(p);      
    await mongo.cliente.close();
    return resultados.acknowledged ;
  } catch (error) {
    throw error;
  }
}


export const actualizar= async (p:blogs): Promise<Boolean> => {
  try {      
    const mongo = getconnection();
    const collection = mongo.db.collection("blogs");
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
    const collection = mongo.db.collection("blogs");
    const resultados = await collection.deleteOne({_id: new ObjectId(id)});
    await mongo.cliente.close();
    return resultados.deletedCount > 0;
  } catch (error) {
    throw error;
  }
}