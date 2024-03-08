function cadastrar() {
    lerCampos();
    limparCampos();
    inserirDados();
}

function lerCampos() {
    let medicamento = {
        nome: document.getElementById("nome").value,
        preco: document.getElementById("preco").value,
        quantidade: document.getElementById("quantidade").value,
        laboratorio: document.getElementById("laboratorio").value
    };

    let dataInput = document.getElementById("dataValidade").value;
    let dataFormatada = dataInput.split('-').reverse().join('/');
    medicamento.dataValidade = dataFormatada;

    validarCampos(medicamento);
}

function validarCampos(medicamento) {
    if (
        medicamento.nome != "" &&
        medicamento.preco != 0 &&
        medicamento.quantidade != 0 &&
        medicamento.laboratorio != ""
    ) {
        let dadosArmazenados = JSON.parse(localStorage.getItem("medicamentos")) || [];

        if (!medicamentoDuplicado(medicamento, dadosArmazenados)) {
            dadosArmazenados.push(medicamento);
            localStorage.setItem("medicamentos", JSON.stringify(dadosArmazenados));
            alert(`Medicamento ${medicamento.nome} inserido com sucesso!`);
        } else {
            alert("Medicamento já cadastrado!");
        }
    } else {
        alert("Digite os dados do medicamento que deseja cadastrar.");
    }
}

function medicamentoDuplicado(novoMedicamento, medicamentosArmazenados) {
    return medicamentosArmazenados.some(
        (medicamento) => medicamento.nome === novoMedicamento.nome
    );
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("laboratorio").value = "";
    document.getElementById("dataValidade").value = "";
}

function inserirDados(){
    if (medicamentos.length > 0) {
        let dadosArmazenados = JSON.parse(localStorage.getItem("medicamentos")) || [];
        dadosArmazenados = dadosArmazenados.concat(medicamentos);
        localStorage.setItem("medicamentos", JSON.stringify(dadosArmazenados));
    }
}