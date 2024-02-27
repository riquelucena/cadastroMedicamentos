let medicamento = localStorage.getItem("medicamentos");
let medicamentoObj = JSON.parse(medicamento);
const medicamentos = medicamentoObj;

function buscaMedicamento(dado) {
    let resultados = [];

    for (let i = 0; i < medicamentos.length; i++) {
        if (medicamentos[i].nome.toLowerCase().includes(dado.toLowerCase())) {
            resultados.push(medicamentos[i]);
        }
    }

    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    document.querySelector(".lista-de-medicamentos").innerHTML = "";

    resultados.forEach(resultado => {
        let listItem = document.createElement("li");

        let nomeItem = document.createElement("li");
        nomeItem.textContent = `Medicamento: ${resultado.nome}`;
        listItem.appendChild(nomeItem);

        let precoItem = document.createElement("li");
        precoItem.textContent = `Preço: ${resultado.preco}`;
        listItem.appendChild(precoItem);

        let quantidadeItem = document.createElement("li");
        quantidadeItem.textContent = `Quantidade: ${resultado.quantidade}`;
        listItem.appendChild(quantidadeItem);

        let dataValidadeItem = document.createElement("li");
        dataValidadeItem.textContent = `Data de validade: ${resultado.dataValidade}`;
        listItem.appendChild(dataValidadeItem);

        let laboratorioItem = document.createElement("li");
        laboratorioItem.textContent = `Laboratório: ${resultado.laboratorio}`;
        listItem.appendChild(laboratorioItem);

        document.querySelector(".lista-de-medicamentos").appendChild(listItem);
    });
}

