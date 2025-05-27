import  Express  from "express";
import * as comentarioscontrollers from "../controllers/comentarios.controllers";
import {comentarios} from "../models/comentarios";

const router = Express.Router();

router.get('/', (rq, rs) => {
    comentarioscontrollers.Getcomentarios()
    .then((obj) =>{
        rs.json(obj);
    })
    .catch((e)=>{
        rs.status(500).json(e);
    });
});

router.post('/', (rq,rs) =>{
    comentarioscontrollers.Postcomentarios  (rq.body as comentarios)
    .then((obj) =>{
        if(obj)
        rs.status(201).send();
        else
        rs.status(500).send();
    })
    .catch((e) =>{
        rs.status(500).json(e);
    });
});

router.put('/:id', (rq, rs) => {
    comentarioscontrollers.Updatecomentarios(rq.params.id, rq.body as comentarios)
    .then((obj) => {
        if(obj)
            rs.status(200).send();
        else
            rs.status(404).send(); 
    })
    .catch((e) => {
        rs.status(500).json(e);
    });
});

router.delete('/:id', (rq, rs) => {
    comentarioscontrollers.Deletecomentarios(rq.body._id)
    .then((sucess) => {
        if(sucess)
            rs.status(200).send();
        else
            rs.status(404).send(); 
    })
    .catch((e) => {
        rs.status(500).json(e);
    });
});

export default router;

