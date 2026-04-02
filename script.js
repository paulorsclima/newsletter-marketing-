// Captura o formulário
const form = document.querySelector("form");

// Evento de envio
form.addEventListener("submit", function(event){

    event.preventDefault(); // impede recarregar a página

    // Captura valores
    const nome = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const telefone = form.querySelector('input[type="tel"]').value;
    const mensagem = form.querySelector('textarea').value;

    // Validação simples
    if(nome === "" || email === ""){
        alert("Por favor preencha Nome e Email.");
        return;
    }

    // Criando objeto com dados
    const lead = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem,
        data: new Date().toLocaleString()
    };

    console.log("Novo lead:", lead);

    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");

    // Limpar formulário
    form.reset();

});
