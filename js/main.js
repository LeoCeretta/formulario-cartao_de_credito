const form = document.getElementById("formulario");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

form.addEventListener("submit", (evento)=> {
    evento.preventDefault();

    const nome = evento.target.elements["nome"];
    const numero = evento.target.elements["numero"];
    const mes = evento.target.elements["mes"];
    const ano = evento.target.elements["ano"];
    const cvc = evento.target.elements["cvc"];

    const itemAtual = {
        "nome": nome.value,
        "numero": numero.value,
        "mes": mes.value,
        "ano": ano.value,
        "cvc": cvc.value
    }

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));


});


function preencheCartao(itemAtual) {
    document.querySelector("[numero-no-cartao]").innerHTML = itemAtual.numero;
    document.querySelector("[nome-no-cartao]").innerHTML = itemAtual.nome;
    document.querySelector("[mes-no-cartao]").innerHTML = itemAtual.mes;
    document.querySelector("[ano-no-cartao]").innerHTML = itemAtual.ano;
    document.querySelector("[cvc-no-cartao]").innerHTML = itemAtual.cvc;
}

console.log(preencheCartao);