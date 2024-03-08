function cadastrar() {
    lerCampos();
    limparCampos();
    inserirDados();
}

function lerCampos() {
    let fornecedor = {
        nome: document.getElementById("nome").value,
        endereco: document.getElementById("endereco").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value
    };

    validarCampos(fornecedor);
}

function validarCampos(fornecedor) {
    if (
        medicamento.nome != "" &&
        medicamento.endereco != "" &&
        medicamento.telefone != 0 &&
        medicamento.email != ""
    ) {
        let dadosArmazenados = JSON.parse(localStorage.getItem("fornecedores")) || [];

        if (!fornecedorDuplicado(fornecedor, dadosArmazenados)) {
            dadosArmazenados.push(fornecedor);
            localStorage.setItem("fornecedores", JSON.stringify(dadosArmazenados));
            alert(`Fornecedor ${fornecedor.nome} inserido com sucesso!`);
        } else {
            alert("Fornecedor já cadastrado!");
        }
    } else {
        alert("Digite os dados do fornecedor que deseja cadastrar.");
    }
}

function fornecedorDuplicado(novoFornecedor, fornecedoresArmazenados) {
    return fornecedoresArmazenados.some(
        (fornecedor) => fornecedor.nome === novoFornecedor.nome
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