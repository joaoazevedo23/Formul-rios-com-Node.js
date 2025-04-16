const form = document.querySelector("#form");
form.addEventListener("submit", function (apertar) {
    apertar.preventDefault()

    const nome = form.nome.value;
    const email = form.email.value;
    const telefone = form.telefone.value;
    const endereco = form.endereco.value;
    const livro = form.livro.value;

    // Cria o conteúdo XML como uma string
    const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<cliente>
    <nome>${escapeXml(nome)}</nome>
    <email>${escapeXml(email)}</email>
    <telefone>${escapeXml(telefone)}</telefone>
    <endereco>${escapeXml(endereco)}</endereco>
    <livro>${escapeXml(livro)}</livro>
</cliente>`;

// Cria um objeto Blob com o conteúdo XML e o tipo MIME correto
const blob = new Blob([xmlString], { type: 'text/xml'});

// Cria um link para download do arquivo
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'cliente.xml'; // Nome do arquivo XML

// Adiciona o link ao corpo do documento
document.body.appendChild(link);

// Simula um clique no link para iniciar o download
link.click();

// Remove o link do corpo do documento
document.body.removeChild(link);
});

// Função para escapar caracteres especiais para XML
function escapeXml(unsafe) {
    return unsafe.replace(/[<>&""]/g, function (c) {
    switch (c) {
    case '<': return '&lt;';
    case '>': return '&gt;';
    case '&': return '&amp;';
    case '\'': return '&apos;';
    case '"': return '&quot;';
}
});
}




