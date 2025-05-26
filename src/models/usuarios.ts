import { ObjectId } from "mongodb";

export class usuarios{
    _id: ObjectId;
    nombre: string;
    correo:string;
    fechaCreacion:Date;

    constructor (id : ObjectId, nombre : string, correo:string, fechaCreacion:Date){
        this._id= id;
        this.nombre=nombre;
        this.correo=correo;
        this.fechaCreacion=fechaCreacion;
    }
}