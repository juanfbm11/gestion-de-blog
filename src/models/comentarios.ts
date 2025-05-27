import { ObjectId } from "mongodb";
import { usuarios } from "./usuarios";
import { blogs } from "./blogs";

export class comentarios {
   _id: ObjectId;
   blog: string;
   usuarios: string;
   fechaCreacion: Date;


   constructor(id: ObjectId, blog: string, usuarios: string, fechaCreacion: Date) {
      this._id = id;
      this.blog = blog;
      this.usuarios = usuarios;
      this.fechaCreacion = fechaCreacion;
   }
}
