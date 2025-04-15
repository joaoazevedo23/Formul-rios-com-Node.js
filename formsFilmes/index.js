const form = document.querySelector("#form");
form.addEventListener("submit", function (apertar) {
    apertar.preventDefault()

    const filme = form.filme.value
    const diretor = form.diretor.value
    const ano = Number(form.ano.value)
    const gen = form.gen.value

    const novoFilme = {
        filme,
        diretor,
        ano,
        gen
    }

    fetch("http://localhost:2030/serverfilme", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoFilme)
    })

        .then(res => res.json())
        .then(data => {
            console.log(data.mensagem)
            form.reset()
        })
        .catch(err => console.error("Erro: ", err))
});

function mostrarRespostas() {

    fetch("http://localhost:2030/filmes")
        .then(res => res.json())
        .then(dados => {
            const listaR = document.getElementById("lista");
            listaR.innerHTML = "";

            dados.forEach((filme) => {
                const item = document.createElement("li");
                item.textContent = `Título: ${filme.filme}, Diretor: ${filme.diretor}, Ano: ${filme.ano}, Gênero: ${filme.gen}`;
                listaR.appendChild(item);
            })

        })
        .catch(err => console.error("Erro ao recuperar filmes: ", err))
    }