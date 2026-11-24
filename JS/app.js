
// Agendamento de visitas aos estádios

const cadastro = document.getElementById("formVisita");

cadastro.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const estadio = document.getElementById("estadio").value;
    const data = document.getElementById("data").value;

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const dataEscolhida = new Date(data + "T00:00:00");

    if (dataEscolhida < hoje) {
        alert("Escolha uma data válida!");
        return;
    }

    alert(`Agendamento realizado com sucesso, ${nome}!

Estádio: ${estadio}
Data: ${data.split("-").reverse().join("/")}

Obrigado por utilizar o Roteiro dos Estádios!`);

    cadastro.reset();

});
