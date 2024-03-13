let medicamento = localStorage.getItem("medicamentos");
    let medicamentoObj = JSON.parse(medicamento);
    const medicamentos = medicamentoObj;

function criarListaDeMedicamentos() {
    if (medicamentos.length === 0) {
        document.getElementById("tabelaMedicamentos").innerHTML = "Nenhum medicamento cadastrado.";
        return;
    }
    
    let tabelaHTML = "<table border='1'><tr><th>Nome</th><th>Preço</th><th>Quantidade</th><th>Ações</th></tr>";
    
    for (let i = 0; i < medicamentos.length; i++) {
        tabelaHTML += `<tr>
                           <td>${medicamentos[i].nome}</td>
                           <td>${medicamentos[i].preco}</td>
                           <td>${medicamentos[i].quantidade}</td>
                           <td>
                              <button type="button" onclick='editarMedicamento(${i})'>Editar</button>
                              <button type="button" onclick='excluirMedicamento(${i})'>Excluir</button>
                           </td>
                       </tr>`;
    }
    
    tabelaHTML += "</table>";
    
    document.getElementById("tabelaMedicamentos").innerHTML = tabelaHTML;
}
    
window.onload = function() {
    criarListaDeMedicamentos();
};

function editarMedicamento(dado) {
    const medicamentoEd = medicamentos[dado];

    sessionStorage.setItem("medicamentos", JSON.stringify(medicamentoEd));

    window.location.href = "editarmedicamento.html";
}

function excluirMedicamento() {
    console.log('Medicamento Excluído')
}
