//Função para consultar o endereço
function consultaEndereco() {
    let cep = document.querySelector('#cep').value;

    // se p cep for maior que 8 digitos, sugirá tela de alerta com erro
    if (cep.length !== 8) {
        alert('Cep inválido');
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`; //webservice ViaCep


    fetch(url).then(function(response) {
        response.json().then(mostraEndereco);
    });
}
//função para mostrar o endereço na DIV #resultado
function mostraEndereco(dados) {
    let resultado = document.querySelector('#resultado')
        //se o cep informado for inválido, aparecerá a mensagem abaixo
    if (dados.erro) {
        resultado.innerHTML = "Endereço não localizado";
    } else {
        //aqui estão concatenados os dados a serem retornados em um mesmo campo.
        resultado.innerHTML = `Endereço: ${dados.logradouro}, ${dados.bairro}, ${dados.localidade}, ${dados.uf} `
    }
}