const express = require("express")
const cors = require("cors")
const Servidor = express()
Servidor.use(express.json())
Servidor.use(cors())

const arrayFilmes = []

Servidor.post('/serverfilme', (req, res)=>{
    const filme = req.body.filme
    const diretor = req.body.diretor
    const ano = req.body.ano
    const gen = req.body.gen

    const novoFilme = {
        filme,
        diretor,
        ano,
        gen
    }

    arrayFilmes.push(novoFilme)
    res.status(201).json({mensagem: "Filme cadastrado com sucesso!"})
})

Servidor.get('/filmes', (req, res)=>{
    res.json(arrayFilmes)
})

Servidor.listen(2030, ()=>{
    console.log("Servidor filmático e cinematografico rodando!!")
})
