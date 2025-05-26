import { Db, MongoClient } from "mongodb";
import { mongoCofig } from "./config";


export default function getconnection(): {db:Db, cliente: MongoClient}{
 const cliente = new MongoClient(mongoCofig.server, mongoCofig.options);
 const db = cliente.db(mongoCofig.dbname);
 return { db,cliente}  
}