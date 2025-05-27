import {comentarios} from "../models/comentarios";
import * as daocomentarios from "../dao/comentarios.dao";

export const Getcomentarios = async (): Promise<comentarios[]> => {
    try {
        let rs: comentarios[]= await daocomentarios.listar();
        return rs;
    } catch (error) {
       throw error;
    }
}

export const Postcomentarios = async (p:comentarios): Promise<Boolean> =>{
    try {
        return await daocomentarios.insertar(p);
    } catch (error) {
        throw error;
        
    }
}

export const Updatecomentarios = async (id: string, p: comentarios):Promise<Boolean>=>{
    try {
       return await daocomentarios.actualizar(p);
    } catch (error) {
       throw error;
    }
   }

  export const Deletecomentarios= async (id:string):Promise<Boolean>=>{
       try {
          return await daocomentarios.eliminar(id)
       } catch (error) {
           throw error;
       }
   }