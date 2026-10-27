
// CONFIGURAÇÃO

const NUMERO_WHATSAPP = "5581984576484";


// =========================
// // FORMULÁRIO DE CONTATO


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    // impede a página de recarregar
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    
    if (nome === "" || mensagem === "") {
        alert("Preencha seu nome e sua mensagem antes de enviar.");
        return;
    }

    // texto que vai para o whatsapp
    const texto = "Olá, Evellyn! Meu nome é " + nome + ".\n\n" + mensagem;

    
    const link = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto);

    // abre o WhatsApp em uma nova aba
    window.open(link, "_blank");

    // limpa o formulário
    formulario.reset();
});