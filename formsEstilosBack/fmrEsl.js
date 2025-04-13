const express = require("express")
const cors = require("cors")
const Servidor = express()

Servidor.use(express.json())
Servidor.use(cors())

porta = 3033

arrayMusicas = []

Servidor.post('/musica', (req, res)=>{
    const titulo = req.body.titulo
    const artista = req.body.artista
    const ano = req.body.ano
    const genero = req.body.genero

    const novaMusica = {
        titulo,
        artista,
        ano,
        genero
    }

    arrayMusicas.push(novaMusica)
    res.status(201).json({mensagem: "Música cadastrada com sucesso!!"})
})

Servidor.get('/musicas', (req, res)=>{
    res.json(arrayMusicas)
})

Servidor.listen((porta), ()=>{
    console.log(`Ouvindo e atuando na porta ${porta}`)
})