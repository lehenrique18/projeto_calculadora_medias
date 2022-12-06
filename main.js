let form = document.getElementById("form-atividade");
const imgAprovado = '<img src="/images/aprovado.png" alt="Emoji celebramdo" />';
const imgReprovado = '<img src="/images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionaLinha(){
    let inputNome = document.getElementById('nome-atividade');
    let inputNota = document.getElementById('nota-atividade');

    if(atividades.includes(inputNome.value)){
        alert(`A atividade : "${inputNome.value}" já foi inserida`)
    }else{
        atividades.push(inputNome.value);
        notas.push(parseFloat(inputNota.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNota.value}</td>`
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNome.value ='';
    inputNota.value = '';
}

function atualizaTabela(){
    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;
}

function atualizaMedia(){
    let mediaFinal = calculaMedia();
    document.getElementById('media-final').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedia(){
    let somaMedia = 0;
    for(let i = 0; i < notas.length; i++){
        somaMedia += notas[i];
    }

    return somaMedia / notas.length;
 
}