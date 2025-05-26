import { usuarios } from "../models/usuarios";
import * as daousuarios from "../dao/usuarios.dao";

export const GetUsuarios = async (): Promise<usuarios[]> => {
    try {
        let rs: usuarios[]= await daousuarios.listar();
        return rs;
    } catch (error) {
       throw error;
    }
}

export const Postusuarios = async (p:usuarios): Promise<Boolean> =>{
    try {
        return await daousuarios.insertar(p);
    } catch (error) {
        throw error;
        
    }
}


export const UpdateUsuarios = async (id: string, p: usuarios):Promise<Boolean>=>{
    try {
       return await daousuarios.actualizar(p);
    } catch (error) {
       throw error;
    }
   }
   
   export const DeleteUsuarios = async (id:string):Promise<Boolean>=>{
       try {
          return await daousuarios.eliminar(id)
       } catch (error) {
           throw error;
       }
   }


