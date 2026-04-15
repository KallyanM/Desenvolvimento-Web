const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

function adicionarTarefa() {
  const textoTarefa = inputTarefa.value.trim();

  if (textoTarefa !== '') {
    const novoLi = document.createElement('li');

    novoLi.textContent = textoTarefa;

    listaTarefas.appendChild(novoLi);

    inputTarefa.value = '';
    inputTarefa.focus();
  } else {
    alert('Por favor, digite uma tarefa!');
  }
}

btnAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    adicionarTarefa();
  }
});

listaTarefas.addEventListener('click', function(evento) {
  if (evento.target.tagName === 'LI') {
    evento.target.remove();
  }
});