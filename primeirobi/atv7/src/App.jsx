import './App.css';


function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>Relâmpago Marquinhos: KA-CHOW!</h1>
      <Navigation />
    </header>
  );
}

function Article(props) {
  return (
    <article className="card">
      <h2>{props.titulo}</h2>
      
      <p>
        <strong>Autor:</strong> {props.autor} | <time>{props.data}</time>
      </p>

      {props.conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <figure>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/af/Lightning_McQueen_%2834615708803%29.jpg"
          alt="McQueen personagem do filme Carros" 
        />
        <figcaption>McQueen em exibição</figcaption>
      </figure>
    </article>
  );
}

function Sidebar() {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        <li><a href="#">Por que há calçadas na animação Carros?</a></li>
        <li><a href="#">Aviões, a animação que não decolou!</a></li>
        <li><a href="#">Disney anuncia novo filme do universo de Carros</a></li>
      </ul>
    </aside>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 - Todos os direitos Reservados</p>
    </footer>
  );
}


export default function App() {
  const dadosDoPost = {
    titulo: "Possante como um jato, veloz como um foguete",
    autor: "Relâmpago McQueen",
    data: "25 de Fevereiro de 2026",
    conteudo: [
      "O Relâmpago McQueen, da animação Carros da Pixar Animation Studios, é a própria definição de rapidez e velocidade. Desde sua estreia nas pistas da Copa Pistão, ele impressiona com sua aceleração explosiva, curvas precisas e uma confiança que combina perfeitamente com seu espírito competitivo.",
      "Com seu motor potente e pintura vermelha marcante, McQueen não corre — ele voa baixo pelo asfalto. Seu lema, “Ka-chow!”, representa exatamente isso: energia, impulso e a certeza de que nasceu para estar sempre na frente. 🏁"
    ]
  };

  return (
    <div className="container-app">
      <Header />
      
      <main>
        <Article 
          titulo={dadosDoPost.titulo}
          autor={dadosDoPost.autor}
          data={dadosDoPost.data}
          conteudo={dadosDoPost.conteudo}
        />
      </main>

      <Sidebar />
      <Footer />
    </div>
  );
}