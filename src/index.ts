import  Express  from "express";
import cors from 'cors';
import usuariosrouter from './routes/usuarios.route'
import blogsrouter from './routes/blogs.route'
import comentariosrouter from './routes/comentarios.route'



const app = Express();
const PORT = 3000;

app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/usuarios', usuariosrouter)
app.use('/api/blogs', blogsrouter)
app.use('/api/comentarios', comentariosrouter )

app.listen(PORT, ()=>{
    console.log(`escuchando el puerto ${PORT}`)
    
});