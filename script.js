const nomesAdicionadosLeitor = [];
const nomesAdicionadosComentario = [];

function adicionarNome() {
  
  const inputNome = document.getElementById('nome');
  const nome = inputNome.value.trim(); // Remove espaços em branco no início e no fim
  if (nome) {
    const listaNomesLeitor = document.getElementById('listaNomesLeitor');
    const listaNomesComentario = document.getElementById('listaNomesComentario');
    const novoItemLeitor = document.createElement('li');
    const novoItemComentario = document.createElement('li');
    novoItemLeitor.textContent = nome;
    novoItemComentario.textContent = nome;

    // Atribuir o valor do nome como ID e class
    novoItemLeitor.id = nome+'leitor';
    novoItemComentario.id = nome+'comentario';
    novoItemLeitor.className = 'leitores';
    novoItemComentario.className = 'comentarios';

    listaNomesLeitor.appendChild(novoItemLeitor);
    listaNomesComentario.appendChild(novoItemComentario);
    nomesAdicionadosLeitor.push(nome);
    nomesAdicionadosComentario.push(nome);

    // Limpar o campo de entrada
    inputNome.value = '';
  }
}
let nomesSorteadosLeitor = [...nomesAdicionadosLeitor]; // Cria uma cópia do array original
let nomesSorteadosComentarios = [...nomesAdicionadosComentario]; // Cria uma cópia do array original

// Função para sortear um nome aleatório e garantir que não seja repetido
function sortearNomeLeitor() {
    if (nomesSorteadosLeitor.length === 0) {
       reiniciarLista();  
    }
    const indiceSorteado = Math.floor(Math.random() * nomesSorteadosLeitor.length);
    const nomeSorteado = nomesSorteadosLeitor.splice(indiceSorteado, 1)[0];
    return nomeSorteado;
}

function exibirNomeSorteadoLeitor() {
  const nome = sortearNomeLeitor();
  const elementoNomeSorteado = document.getElementById(nome+'leitor');

  if (elementoNomeSorteado) {
    // Altere a cor do elemento (por exemplo, para vermelho)
    elementoNomeSorteado.style.color = 'red';
    alert(nome + " Vai ler!");
  } else {
    alert("Nome não encontrado: " + nome);
  }
}

function sortearNomeComentario() {
  if (nomesSorteadosComentarios.length === 0) {
     reiniciarLista();  
  }
  const indiceSorteado = Math.floor(Math.random() * nomesSorteadosComentarios.length);
  const nomeSorteado = nomesSorteadosComentarios.splice(indiceSorteado, 1)[0];
  return nomeSorteado;
}


function exibirNomeSorteadoComentario() {
  const nome = sortearNomeComentario();
  const elementoNomeSorteado = document.getElementById(nome+'comentario');

  if (elementoNomeSorteado) {
    // Altere a cor do elemento (por exemplo, para vermelho)
    elementoNomeSorteado.style.color = 'green';
    alert(nome + " Vai comentar!");
  } else {
    alert("Nome não encontrado: " + nome);
  }
}

function reiniciarLista() {
  nomesSorteadosLeitor = [...nomesAdicionadosLeitor];
  nomesSorteadosComentarios = [...nomesAdicionadosComentario];
}