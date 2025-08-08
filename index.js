const express = require("express")
const app = express()
const port = 3000
app.use(expres.json())
const usuarios = []
app.post('/ola', (req, res)=>{
    const usuario = req.body //"pega" os dados da requisição 
    usuarios.push(usuario) //adiciona o usuário na lista 
    res.send("Usuário cadstro com sucesso!")

    res.send("Olá 3°DS!") 

})


app.get('/ola', (req, res)=>{
    res.send("Olá 3°DS!") 

})

app.listen(port,()=>{
    console.log("API rodando...") 
} )


