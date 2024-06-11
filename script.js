function adicionarNome() {
  
  const inputNome = document.getElementById('nome');
  const nome = inputNome.value.trim(); // Remove espaços em branco no início e no fim

  if (nome) {
      const listaNomes = document.getElementById('listaNomes');
      const novoItem = document.createElement('li');
      novoItem.textContent = nome;
      listaNomes.appendChild(novoItem);

      // Limpar o campo de entrada
      inputNome.value = '';
  }
}
