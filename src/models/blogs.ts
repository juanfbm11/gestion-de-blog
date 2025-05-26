import { ObjectId } from "mongodb";


export class blogs{
    _id: ObjectId ;
    nombre: string;
    correo: string;
    fecha_creacion: Date;

    constructor( id: ObjectId ,nombre: string, correo: string, fecha_creacion: Date){
        this._id= id;
        this.nombre=nombre;
        this.correo=correo;
        this.fecha_creacion=fecha_creacion;
        
    }
    

    
}