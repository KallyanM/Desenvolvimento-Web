import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  // Adicionar tarefa
  function adicionarTarefa(e) {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      text: input
    };

    setTarefas([...tarefas, novaTarefa]); // imutável
    setInput("");
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novaLista);
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Minhas Tarefas</h1>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.text}
            <button onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;