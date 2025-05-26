import  Express  from "express";
import * as usuarioscontrollers from "../controllers/usuarios.controllers";
import { usuarios } from "../models/usuarios";

const router = Express.Router();

router.get('/', (rq, rs) => {
    usuarioscontrollers.GetUsuarios()
    .then((obj) =>{
        rs.json(obj);
    })
    .catch((e)=>{
        rs.status(500).json(e);
    });
});

router.post('/', (rq,rs) =>{
    usuarioscontrollers.Postusuarios(rq.body as usuarios)
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
    usuarioscontrollers.UpdateUsuarios(rq.params.id, rq.body as usuarios)
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
    usuarioscontrollers.DeleteUsuarios(rq.body._id)
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



