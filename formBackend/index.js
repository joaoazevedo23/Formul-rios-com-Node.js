const express = require("express")
const cors = require("cors")
const Servidor = express()
Servidor.use(cors())
Servidor.use(express.json())

const porta = 2022

const clubeInventos = [];

Servidor.post('/inventor', (req, res)=>{
    const nome = req.body.nome
    const idade = Number(req.body.idade)
    const invento = req.body.invento
    const ano = Number(req.body.ano)

    const novoInventor = {
        nome,
        idade,
        invento,
        ano
    }

    clubeInventos.push(novoInventor)
    res.status(201).json({ mensagem: "Inventor adicionado com sucesso!" });

})

// Envia os dados
Servidor.get("/inventores", (req, res) => {
    res.json(clubeInventos);
})

Servidor.listen((porta), () => {
    console.log(`Server forms sempre on na porta ${porta}`);
})