import  Express  from "express";
import * as blogscontrollers from "../controllers/blogs.constrollers";
import { blogs } from "../models/blogs";



const router =  Express.Router();

router.get('/', (rq, rs) => {
    blogscontrollers.GetBlogs()
    .then((obj) =>{
        rs.json(obj);
    })
    .catch((e)=>{
        rs.status(500).json(e);
    });
});

router.post('/', (rq,rs) =>{
    blogscontrollers.PostBlogs(rq.body as blogs)
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
    blogscontrollers.UpdateBlogs(rq.params.id, rq.body as blogs)
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
    blogscontrollers.DeleteBlogs(rq.body._id)
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


