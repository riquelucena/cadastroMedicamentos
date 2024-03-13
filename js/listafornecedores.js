let fornecedor = localStorage.getItem("fornecedores");
    let fornecedorObj = JSON.parse(fornecedor);
    const fornecedores = fornecedorObj;

function criarListaDeFornecedores() {
    if (fornecedores.length === 0) {
        document.getElementById("tabelaFonecedores").innerHTML = "Nenhum fornecedor cadastrado.";
        return;
    }
    
    let tabelaHTML = "<table border='1'><tr><th>Nome</th><th>Endereço</th><th>Telefone</th><th>Email</th></tr>";
    
    for (let i = 0; i < fornecedores.length; i++) {
        tabelaHTML += `<tr>
                           <td>${fornecedores[i].nome}</td>
                           <td>${fornecedores[i].endereco}</td>
                           <td>${fornecedores[i].telefone}</td>
                           <td>${fornecedores[i].email}</td>
                           <td>
                              <button type="button" onclick='editarMedicamento(${i})'>Editar</button>
                              <button type="button" onclick='excluirMedicamento(${i})'>Excluir</button>
                           </td>
                       </tr>`;
    }
    
    tabelaHTML += "</table>";
    
    document.getElementById("tabelaFornecedores").innerHTML = tabelaHTML;
}
    
window.onload = function() {
    criarListaDeFornecedores();
};

function editarFornecedor(dado) {
    const fornecedorEd = fornecedores[dado];

    sessionStorage.setItem("fornecedores", JSON.stringify(fornecedorEd));

    window.location.href = "editarfornecedor.html";
}

function excluirFornecedor() {
    console.log('Fornecedor Excluído')
}