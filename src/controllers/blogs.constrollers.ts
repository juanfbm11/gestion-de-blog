import {blogs} from "../models/blogs";
import * as daoblogs from "../dao/blogs.dao";



export const GetBlogs = async (): Promise< blogs [] > =>{
    try {
        let rs: blogs [] = await daoblogs.listar();
        return rs;
    } catch (error) {
        throw error;
        
    }
}

export const PostBlogs = async (b:blogs): Promise<Boolean> =>{
    try {
        return await daoblogs.insertar(b);
    } catch (error) {
        throw error;
        
    }
}


export const UpdateBlogs = async (id: string, b: blogs):Promise<Boolean>=>{
    try {
       return await daoblogs.actualizar(b);
    } catch (error) {
       throw error;
    }
   }
   
   export const DeleteBlogs = async (id:string):Promise<Boolean>=>{
       try {
          return await daoblogs.eliminar(id)
       } catch (error) {
           throw error;
       }
   }





