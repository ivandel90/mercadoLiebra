const express= require (`express`);
const path = require (`path`);

const app= express();

const publicPath = path.resolve(__dirname, `./public`);
app.use(express.static(publicPath));

app.listen(3030, ()=>{
    console.log("servidor corriendo en el puerto 3030") //levanta servidor
});

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname,`./views/home.html`))
});

app.get("/about",(req,res)=> {
    res.sendFile(path.join(__dirname,`./views/about.html`))
});

app.get("/music",(req,res)=> {
    res.sendFile(path.join(__dirname,`./views/music.html`))
});
app.get("/contact",(req,res)=> {
    res.sendFile(path.join(__dirname,`./views/contact.html`))
});

