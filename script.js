const nomesAdicionados = [];
function adicionarNome() {
  
  const inputNome = document.getElementById('nome');
  const nome = inputNome.value.trim(); // Remove espaços em branco no início e no fim
  if (nome) {
    const listaNomes = document.getElementById('listaNomes');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;

    // Atribuir o valor do nome como ID
    novoItem.id = nome;
    novoItem.className = 'leitores';

    listaNomes.appendChild(novoItem);
    nomesAdicionados.push(nome);

    // Limpar o campo de entrada
    inputNome.value = '';
  }
  console.log(nomesAdicionados)
}
let nomesSorteados = [...nomesAdicionados]; // Cria uma cópia do array original

// Função para sortear um nome aleatório e garantir que não seja repetido
function sortearNome() {
    if (nomesSorteados.length === 0) {
       reiniciarLista();  
    }

    const indiceSorteado = Math.floor(Math.random() * nomesSorteados.length);
    const nomeSorteado = nomesSorteados.splice(indiceSorteado, 1)[0];
    return nomeSorteado;
}


function reiniciarLista() {
  nomesSorteados = [...nomesAdicionados];
  const corLeitores = document.getElementsByClassName('leitores');
  for (const elemento of corLeitores) {
    elemento.style.color = 'white';
  }
}

function exibirNomeSorteado() {
  const nome = sortearNome();
  const elementoNomeSorteado = document.getElementById(nome);

  if (elementoNomeSorteado) {
    // Altere a cor do elemento (por exemplo, para vermelho)
    elementoNomeSorteado.style.color = 'red';
    alert("Nome sorteado: " + nome);
  } else {
    alert("Nome não encontrado: " + nome);
  }
}